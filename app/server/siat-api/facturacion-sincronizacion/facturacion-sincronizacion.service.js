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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturacionSincronizacionService = void 0;
const common_1 = require("@nestjs/common");
const md5 = require("md5");
function getCacheKeyFromObj(data) {
    const key = JSON.stringify(data);
    const hash = md5(key);
    return hash;
}
let FacturacionSincronizacionService = class FacturacionSincronizacionService {
    constructor(soapClient, soapClientTest, cache) {
        this.soapClient = soapClient;
        this.soapClientTest = soapClientTest;
        this.cache = cache;
    }
    getClient(credential, solicitud) {
        if (Number(solicitud.codigoAmbiente) === 2) {
            if (!this.soapClientTest) {
                throw new common_1.HttpException('No se conectar al servicio de SIAT', common_1.HttpStatus.BAD_REQUEST);
            }
            this.soapClientTest.addHttpHeader('apikey', 'TokenApi ' + credential.siatApiKey);
            return this.soapClientTest;
        }
        if (!this.soapClient) {
            throw new common_1.HttpException('No se conectar al servicio de SIAT', common_1.HttpStatus.BAD_REQUEST);
        }
        this.soapClient.addHttpHeader('apikey', 'TokenApi ' + credential.siatApiKey);
        return this.soapClient;
    }
    async fromCache(solicitud, endpoint) {
        solicitud = Object.assign(Object.assign({}, solicitud), { endpoint });
        const key = getCacheKeyFromObj(solicitud);
        const data = await this.cache.get(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }
    async toCache(solicitud, endpoint, data) {
        solicitud = Object.assign(Object.assign({}, solicitud), { endpoint });
        const key = getCacheKeyFromObj(solicitud);
        await this.cache.set(key, JSON.stringify(data), { ttl: 1000 });
        return key;
    }
    async clearCache(solicitud, endpoint) {
        solicitud = Object.assign(Object.assign({}, solicitud), { endpoint });
        const key = getCacheKeyFromObj(solicitud);
        await this.cache.del(key);
    }
    async resetCache() {
        await this.cache.reset();
    }
    async sincronizarParametricaMotivoAnulacion(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaMotivoAnulacion';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaMotivoAnulacionAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarActividades(credential, solicitud) {
        const cacheEndponint = 'sincronizarActividades';
        const data = await this.fromCache(solicitud, 'sincronizarActividades');
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarActividadesAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaActividades;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarFechaHora(credential, solicitud) {
        const client = this.getClient(credential, solicitud);
        const result = await client.sincronizarFechaHoraAsync({
            SolicitudSincronizacion: solicitud,
        });
        const res = result[0].RespuestaFechaHora;
        return res;
    }
    async sincronizarListaLeyendasFactura(credential, solicitud) {
        const cacheEndponint = 'sincronizarListaLeyendasFactura';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarListaLeyendasFacturaAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricasLeyendas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaTipoHabitacion(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaTipoHabitacion';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaTipoHabitacionAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarListaActividadesDocumentoSector(credential, solicitud) {
        const cacheEndponint = 'sincronizarListaActividadesDocumentoSector';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarListaActividadesDocumentoSectorAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaActividadesDocumentoSector;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaTipoDocumentoIdentidad(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaTipoDocumentoIdentidad';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaTipoDocumentoIdentidadAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaUnidadMedida(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaUnidadMedida';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaUnidadMedidaAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaTipoDocumentoSector(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaTipoDocumentoSector';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaTipoDocumentoSectorAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaTiposFactura(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaTiposFactura';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaTiposFacturaAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async verificarComunicacion(credential, solicitud) {
        const client = this.getClient(credential, solicitud);
        const result = await client.verificarComunicacionAsync({});
        const res = result[0].return;
        return res;
    }
    async sincronizarListaMensajesServicios(credential, solicitud) {
        const cacheEndponint = 'sincronizarListaMensajesServicios';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarListaMensajesServiciosAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaTipoMetodoPago(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaTipoMetodoPago';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaTipoMetodoPagoAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaEventosSignificativos(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaEventosSignificativos';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaEventosSignificativosAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaTipoPuntoVenta(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaTipoPuntoVenta';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaTipoPuntoVentaAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarListaProductosServicios(credential, solicitud) {
        const cacheEndponint = 'sincronizarListaProductosServicios';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarListaProductosServiciosAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaProductos;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaTipoEmision(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaTipoEmision';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaTipoEmisionAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaPaisOrigen(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaPaisOrigen';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaPaisOrigenAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
    async sincronizarParametricaTipoMoneda(credential, solicitud) {
        const cacheEndponint = 'sincronizarParametricaTipoMoneda';
        const data = await this.fromCache(solicitud, cacheEndponint);
        if (!data) {
            const client = this.getClient(credential, solicitud);
            const result = await client.sincronizarParametricaTipoMonedaAsync({
                SolicitudSincronizacion: solicitud,
            });
            const res = result[0].RespuestaListaParametricas;
            await this.toCache(solicitud, cacheEndponint, res);
            return res;
        }
        return data;
    }
};
FacturacionSincronizacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FacturacionSincronizacionService')),
    __param(1, (0, common_1.Inject)('FacturacionSincronizacionServiceTest')),
    __param(2, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object, Object, Object])
], FacturacionSincronizacionService);
exports.FacturacionSincronizacionService = FacturacionSincronizacionService;
//# sourceMappingURL=facturacion-sincronizacion.service.js.map