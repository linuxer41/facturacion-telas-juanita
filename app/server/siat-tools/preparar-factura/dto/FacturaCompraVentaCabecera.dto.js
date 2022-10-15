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
exports.FacturaCompraVentaCabeceraDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FacturaCompraVentaCabeceraDTO {
    constructor() {
        this.telefono = null;
        this.codigoPuntoVenta = 0;
        this.nombreRazonSocial = '0';
        this.complemento = null;
        this.numeroTarjeta = null;
        this.montoGiftCard = 0;
        this.descuentoAdicional = 0;
        this.codigoExcepcion = 0;
        this.cafc = null;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Número de NIT registrado en el Padrón Nacional de Contribuyentes que corresponde a la persona o empresa que emite la factura.',
        example: '123456789',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "nitEmisor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Razón Social o nombre registrado en el Padrón Nacional de Contribuyentes de la persona o empresa que emite la factura.',
        example: 'Juan Perez',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "razonSocialEmisor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Nombre del departamento o municipio que se refleja en la Factura.',
        example: 'Sucre',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "municipio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'Número de teléfono que se refleja en la Factura.',
        example: '04241234567',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Numeración propia que se le asigna a la Factura.',
        example: 10,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "numeroFactura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Código único de facturación (CUF) debe ser generado por el emisor siguiendo el algoritmo indicado.',
        example: '123456789',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "cuf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Código único de facturación diario (CUFD), valor único que se obtiene al consumir el servicio web correspondiente.',
        example: '123456789',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "cufd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Código de la sucursal registrada en el Padrón y en la cual se está emitiendo la factura.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "codigoSucursal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Dirección de la sucursal registrada en el Padrón Nacional de Contribuyentes.',
        example: 'Calle 1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Código del punto de venta creado mediante un servicio web y en el cual se emite la factura.',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], FacturaCompraVentaCabeceraDTO.prototype, "codigoPuntoVenta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Fecha de emisión de la factura.',
        example: '2020-01-01T00:00:00.000Z',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "fechaEmision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Nombre o Razón Social del cliente.',
        example: 'Juan Perez',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], FacturaCompraVentaCabeceraDTO.prototype, "nombreRazonSocial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Valor de la paramétrica que identifica el Tipo de Documento utilizado para la emisión de la factura. Puede contener valores del 1 al 5.',
        example: 1,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "codigoTipoDocumentoIdentidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Número que corresponde al Tipo de Documento Identidad utilizado y al cual se realizará la facturación.',
        example: '123456789',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "numeroDocumento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'Valor que otorga el SEGIP en casos de cédulas de identidad con número duplicado, En otro caso enviar un valor nulo agregando en la Etiqueta xsi:nil=”true”',
        example: 'Complemento',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "complemento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Código de identificación único del cliente, deberá ser asignado por el sistema de facturación del contribuyente',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "codigoCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Valor de la paramétrica que identifica el método de pago utilizado para realizar la compra. Por ejemplo 1 que representa a un pago en efectivo.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "codigoMetodoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Cuando el método de pago es 2 (Tarjeta), debe enviarse este valor pero ofuscado con los primeros y últimos 4 dígitos en claro y ceros al medio. Ej: 4797000000007896, en otro caso, debe enviarse un valor nulo.',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "numeroTarjeta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Monto total por el cual se realiza el hecho generador.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "montoTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Monto base para el cálculo del crédito fiscal.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "montoTotalSujetoIva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Valor de la paramétrica que identifica la moneda en la cual se realiza la transacción. Si el código de moneda es boliviano deberá ser igual a 1.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "codigoMoneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Tipo de cambio de acuerdo a la moneda en la que se realiza el hecho generador, si el código de moneda es boliviano deberá ser igual a 1.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "tipoCambio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Es el Monto Total expresado en el tipo de moneda, si el código de moneda es boliviano deberá ser igual al monto total.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "montoTotalMoneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Monto a ser cancelado con una Gift Card',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], FacturaCompraVentaCabeceraDTO.prototype, "montoGiftCard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Monto Adicional al descuento por item',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], FacturaCompraVentaCabeceraDTO.prototype, "descuentoAdicional", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Valor que se envía para autorizar el registro de una factura con NIT inválido. Por defecto, enviar cero (0) o nulo y uno (1) cuando se autorice el registro.',
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], FacturaCompraVentaCabeceraDTO.prototype, "codigoExcepcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'Código de Autorización de Facturas por Contingencia',
        example: null,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "cafc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'Leyenda asociada a la actividad económica.',
        example: 'Esta factura se emite por medio de una aplicación móvil',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "leyenda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'Identifica al usuario que emite la factura, deberá ser descriptivo. Por ejemplo JPEREZ',
        example: 'JPEREZ',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FacturaCompraVentaCabeceraDTO.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: 'Valor de la paramétrica que identifica el tipo de factura que se está emitiendo. Para este tipo de factura este valor es 1.',
        example: 0,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FacturaCompraVentaCabeceraDTO.prototype, "codigoDocumentoSector", void 0);
exports.FacturaCompraVentaCabeceraDTO = FacturaCompraVentaCabeceraDTO;
//# sourceMappingURL=FacturaCompraVentaCabecera.dto.js.map