"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepararFacturaService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("./utils");
const zlib = require("zlib");
const crypto = require("crypto");
const fs = require("fs");
const tar = require("tar-stream");
const facturas_service_1 = require("../../facturas/facturas.service");
const facturacion_operaciones_service_1 = require("../../siat-api/facturacion-operaciones/facturacion-operaciones.service");
const servicio_facturacion_compra_venta_service_1 = require("../../siat-api/servicio-facturacion-compra-venta/servicio-facturacion-compra-venta.service");
const passport_headerapikey_1 = require("passport-headerapikey");
const mail_service_1 = require("../../mail/mail.service");
const clientes_service_1 = require("../../clientes/clientes.service");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
let PrepararFacturaService = class PrepararFacturaService {
    constructor(facturasService, facturacionOperacionesService, mailService, clientesService, configService, servicioFacturacionCompraVentaService) {
        this.facturasService = facturasService;
        this.facturacionOperacionesService = facturacionOperacionesService;
        this.mailService = mailService;
        this.clientesService = clientesService;
        this.configService = configService;
        this.servicioFacturacionCompraVentaService = servicioFacturacionCompraVentaService;
    }
    async facturaCompraVenta(data) {
        var _a;
        const nextNumber = (((_a = (await this.facturasService.maxId())) === null || _a === void 0 ? void 0 : _a.max) || 0) + 1;
        if (!data.cabecera.numeroFactura) {
            data.cabecera.numeroFactura = nextNumber;
        }
        const modalidad = (0, utils_1.getModalidadDef)(data);
        const _data = Object.assign({}, data);
        const xml = (0, utils_1.generarFacturaXml)(_data);
        const gzipped = zlib.gzipSync(Buffer.from(xml, 'utf8')).toString('base64');
        const sha256 = crypto.createHash('sha256').update(xml).digest('hex');
        const jsonXML = await (0, utils_1.xmlToJson)(xml);
        const jsonResponse = Object.values(jsonXML)[0];
        if (!(jsonResponse['detalle'] instanceof Array)) {
            jsonResponse['detalle'] = [jsonResponse['detalle']];
        }
        const res = {
            tipoDocumento: modalidad.name,
            json: jsonResponse,
            zip: gzipped,
            sha256: sha256,
            xml: xml,
        };
        fs.writeFileSync(`${modalidad.name}.xml`, xml);
        return res;
    }
    async validarContingencia(credential, solicitud) {
        const { eventoSignificativo } = solicitud;
        console.log('eventoSignificativo', eventoSignificativo);
        const [facturas, total] = await this.facturasService.findByFechaFacturaRange((eventoSignificativo === null || eventoSignificativo === void 0 ? void 0 : eventoSignificativo.fechaInicio)
            ? new Date(eventoSignificativo === null || eventoSignificativo === void 0 ? void 0 : eventoSignificativo.fechaInicio)
            : new Date('2021-01-01'), (eventoSignificativo === null || eventoSignificativo === void 0 ? void 0 : eventoSignificativo.fechaFin)
            ? new Date(eventoSignificativo === null || eventoSignificativo === void 0 ? void 0 : eventoSignificativo.fechaFin)
            : new Date(), eventoSignificativo === null || eventoSignificativo === void 0 ? void 0 : eventoSignificativo.cufdEvento['codigo']);
        console.log('facturas', facturas);
        const tarball = tar.pack();
        facturas.forEach((factura) => {
            tarball.entry({
                name: `factura_${factura.numero}.xml`,
            }, fs.readFileSync((0, path_1.resolve)(this.configService.get('file.filesLocationDir'), `${factura.xml}`)));
        });
        tarball.finalize();
        const tarballBuffer = tarball.read();
        const sha256 = crypto
            .createHash('sha256')
            .update(tarballBuffer)
            .digest('hex');
        const gzipped = zlib.gzipSync(tarballBuffer).toString('base64');
        fs.writeFileSync('facturas.tar.gz', tarballBuffer);
        const _request = {
            codigoAmbiente: solicitud.codigoAmbiente,
            codigoDocumentoSector: solicitud.codigoDocumentoSector,
            codigoEmision: solicitud.codigoEmision,
            codigoModalidad: solicitud.codigoModalidad,
            codigoPuntoVenta: solicitud.codigoPuntoVenta,
            codigoSistema: solicitud.codigoSistema,
            codigoSucursal: solicitud.codigoSucursal,
            cufd: solicitud.cufd,
            cuis: solicitud.cuis,
            nit: solicitud.nit,
            tipoFacturaDocumento: solicitud.tipoFacturaDocumento,
            archivo: gzipped,
            fechaEnvio: (0, utils_1.siatISOdateTime)(new Date()),
            hashArchivo: sha256,
            cafc: solicitud.cafc,
            cantidadFacturas: String(total || 0),
            codigoEvento: eventoSignificativo.codigoRecepcionEventoSignificativo,
        };
        console.log({ _request });
        const recepcion = await this.servicioFacturacionCompraVentaService.recepcionPaqueteFactura(credential, _request);
        console.log({ recepcion });
        if (Boolean(recepcion.transaccion) !== true) {
            throw new passport_headerapikey_1.BadRequestError(recepcion === null || recepcion === void 0 ? void 0 : recepcion.mensajesList);
        }
        let estadoValidacion = 'PENDIENTE';
        let validacion = {};
        let attempts = 0;
        const maxAttempts = 100;
        while (estadoValidacion === 'PENDIENTE') {
            validacion =
                await this.servicioFacturacionCompraVentaService.validacionRecepcionPaqueteFactura(credential, {
                    codigoAmbiente: solicitud.codigoAmbiente,
                    codigoDocumentoSector: solicitud.codigoDocumentoSector,
                    codigoEmision: solicitud.codigoEmision,
                    codigoModalidad: solicitud.codigoModalidad,
                    codigoPuntoVenta: solicitud.codigoPuntoVenta,
                    codigoSistema: solicitud.codigoSistema,
                    codigoSucursal: solicitud.codigoSucursal,
                    cufd: solicitud.cufd,
                    cuis: solicitud.cuis,
                    nit: solicitud.nit,
                    tipoFacturaDocumento: solicitud.tipoFacturaDocumento,
                    codigoRecepcion: recepcion.codigoRecepcion,
                });
            console.log({ validacion });
            estadoValidacion = validacion === null || validacion === void 0 ? void 0 : validacion.codigoDescripcion;
            attempts++;
            if (estadoValidacion === 'PENDIENTE') {
                if (attempts > maxAttempts) {
                    throw new passport_headerapikey_1.BadRequestError('Intentos de validacion excedidos');
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
        let history = [];
        try {
            history = JSON.parse(fs.readFileSync('validacion.json', 'utf8'));
        }
        catch (error) {
            console.log('error', error);
        }
        if ((history === null || history === void 0 ? void 0 : history.length) > 1000) {
            history.shift();
        }
        history.push(Object.assign(Object.assign({ cufd: solicitud.cufd }, validacion), { numeros: facturas.map((factura) => factura.numero) }));
        fs.writeFileSync('validacion.json', JSON.stringify(history, null, 2));
        for (const factura of facturas) {
            factura.estado = estadoValidacion;
            await this.facturasService.update(factura.id, factura);
        }
        console.log(Object.assign({}, validacion));
        return validacion;
    }
    async enviarEmailFactura(solicitud) {
        var _a, _b;
        const factura = await this.facturasService.findOne(solicitud.idFactura);
        let cliente = await this.clientesService.findOne(((_b = (_a = factura.json) === null || _a === void 0 ? void 0 : _a.cabecera) === null || _b === void 0 ? void 0 : _b.codigoCliente) || 0);
        if (!cliente) {
            cliente = await this.clientesService.findOneByNit(factura.nit);
        }
        if (!factura) {
            throw new passport_headerapikey_1.BadRequestError('Factura no encontrada');
        }
        const { xml, pdf } = factura;
        const email = solicitud.email || (cliente === null || cliente === void 0 ? void 0 : cliente.email);
        if (pdf && email) {
            await this.mailService.sendInvoiceMail({
                to: email,
                data: {
                    xml,
                    pdf,
                    monto: factura.json.cabecera.montoTotalSujetoIva,
                    numero: String(factura.numero),
                    cuf: factura.cuf,
                    cliente: factura.clientName || 'S/N',
                },
            });
            return { message: 'Email enviado' };
        }
        return { message: 'Email no enviado' };
    }
    async anularEmailFactura(solicitud) {
        var _a, _b, _c, _d;
        const factura = await this.facturasService.findOne(solicitud.idFactura);
        ((_b = (_a = factura.json) === null || _a === void 0 ? void 0 : _a.cabecera) === null || _b === void 0 ? void 0 : _b.codigoCliente) || null;
        let cliente = await this.clientesService.findOne(((_d = (_c = factura.json) === null || _c === void 0 ? void 0 : _c.cabecera) === null || _d === void 0 ? void 0 : _d.codigoCliente) || 0);
        if (!cliente) {
            cliente = await this.clientesService.findOneByNit(factura.nit);
        }
        console.log({ cliente, factura });
        if (!factura) {
            throw new passport_headerapikey_1.BadRequestError('Factura no encontrada');
        }
        const email = solicitud.email || (cliente === null || cliente === void 0 ? void 0 : cliente.email) || 'linuxer42@gmail.com';
        await this.mailService.sendCancelInvoiceMail({
            to: email,
            data: {
                numero: String(factura.numero),
                cuf: factura.cuf,
                cliente: factura.clientName,
                motivo: solicitud.motivo,
            },
        });
        return { message: 'Email enviado' };
    }
    async facturasPendientes() {
        return this.facturasService.selectPendingCuisAndCount();
    }
};
PrepararFacturaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [facturas_service_1.FacturasService,
        facturacion_operaciones_service_1.FacturacionOperacionesService,
        mail_service_1.MailService,
        clientes_service_1.ClientesService,
        config_1.ConfigService,
        servicio_facturacion_compra_venta_service_1.ServicioFacturacionCompraVentaService])
], PrepararFacturaService);
exports.PrepararFacturaService = PrepararFacturaService;
//# sourceMappingURL=preparar-factura.service.js.map