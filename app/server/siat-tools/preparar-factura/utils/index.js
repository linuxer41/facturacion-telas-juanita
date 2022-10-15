"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siatISOdateTime = exports.xmlToJson = exports.generarFacturaXml = exports.generateCuf = exports.toBase16 = exports.calcularDigitoMod11 = exports.concatenarParaFactura = exports.getModalidadDef = exports.modalidadesFacturacion = void 0;
const xml2js_1 = require("xml2js");
exports.modalidadesFacturacion = [
    {
        codigo: 1,
        name: 'facturaElectronicaCompraVenta',
        attributes: {
            'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            'xsi:noNamespaceSchemaLocation': 'facturaElectronicaCompraVenta.xsd',
        },
    },
    {
        codigo: 2,
        name: 'facturaComputarizadaCompraVenta',
        attributes: {
            'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            'xsi:noNamespaceSchemaLocation': 'facturaComputarizadaCompraVenta.xsd',
        },
    },
];
const getModalidadDef = (data) => {
    const modalidad = exports.modalidadesFacturacion.find((item) => item.codigo === Number(data.solicitud.codigoModalidad)) || exports.modalidadesFacturacion[0];
    return modalidad;
};
exports.getModalidadDef = getModalidadDef;
function concatenarParaFactura(data) {
    const nitEmisor = data.cabecera.nitEmisor.toString().padStart(13, '0');
    const fechaEmision = data.cabecera.fechaEmision
        .toString()
        .replace(/[^0-9]/g, '')
        .padStart(17, '0');
    const codigoSucursal = data.cabecera.codigoSucursal
        .toString()
        .padStart(4, '0');
    const codigoModalidad = data.solicitud.codigoModalidad
        .toString()
        .padStart(1, '0');
    const codigoEmision = data.solicitud.codigoEmision
        .toString()
        .padStart(1, '0');
    const tipoFacturaDocumento = data.solicitud.tipoFacturaDocumento
        .toString()
        .padStart(1, '0');
    const codigoDocumentoSector = data.cabecera.codigoDocumentoSector
        .toString()
        .padStart(2, '0');
    const numeroFactura = data.cabecera.numeroFactura
        .toString()
        .padStart(10, '0');
    const codigoPuntoVenta = data.cabecera.codigoPuntoVenta
        .toString()
        .padStart(4, '0');
    const concat = nitEmisor +
        fechaEmision +
        codigoSucursal +
        codigoModalidad +
        codigoEmision +
        tipoFacturaDocumento +
        codigoDocumentoSector +
        numeroFactura +
        codigoPuntoVenta;
    return concat;
}
exports.concatenarParaFactura = concatenarParaFactura;
function calcularDigitoMod11(data, numDig = 1, limMult = 9, x10 = false) {
    const cadena = concatenarParaFactura(data);
    let suma = 0;
    let mult = 2;
    for (let i = cadena.length - 1; i >= 0; i--) {
        suma += mult * parseInt(cadena[i]);
        if (mult == limMult) {
            mult = 2;
        }
        else {
            mult += 1;
        }
    }
    if (x10) {
        const dig = ((suma * 10) % 11) % 10;
        return dig.toString().padStart(numDig, '0');
    }
    const dig = suma % 11;
    if (dig == 10) {
        return '1'.padStart(numDig, '0');
    }
    if (dig == 11) {
        return '0'.padStart(numDig, '0');
    }
    return dig.toString().padStart(numDig, '0');
}
exports.calcularDigitoMod11 = calcularDigitoMod11;
function toBase16(value) {
    return BigInt(value).toString(16).toUpperCase();
}
exports.toBase16 = toBase16;
function generateCuf(data) {
    const signableString = concatenarParaFactura(data);
    console.log('signableString', signableString);
    const mod11 = calcularDigitoMod11(data, 1, 9, false);
    console.log('mod11', mod11);
    const concat = `${signableString}${mod11}`;
    console.log('concat', concat);
    const base16 = toBase16(concat);
    console.log('base16', base16);
    const toReturn = base16 + data.solicitud.codigoControlCUFD;
    console.log('toReturn', toReturn);
    return toReturn.toUpperCase();
}
exports.generateCuf = generateCuf;
function generarFacturaXml(data) {
    const modalidad = (0, exports.getModalidadDef)(data);
    const cuf = generateCuf(data);
    data.cabecera.cuf = cuf;
    if (!data.cabecera.nombreRazonSocial) {
        data.cabecera.nombreRazonSocial = '0';
    }
    if (data.cabecera.montoTotal === 0) {
        data.cabecera.montoTotal = '0.0';
    }
    if (data.cabecera.montoTotalSujetoIva === 0) {
        data.cabecera.montoTotalSujetoIva = '0.0';
    }
    for (const iterator in data.cabecera) {
        if (data.cabecera.hasOwnProperty(iterator)) {
            const newData = {
                _: data.cabecera[iterator],
            };
            if (data.cabecera[iterator] === '' ||
                data.cabecera[iterator] === null ||
                data.cabecera[iterator] === undefined) {
                newData['$'] = {
                    'xsi:nil': 'true',
                };
                delete newData['_'];
            }
            data.cabecera[iterator] = newData;
        }
    }
    for (const item of data.detalle) {
        for (const iterator in item) {
            if (item.hasOwnProperty(iterator)) {
                const newData = {
                    _: item[iterator],
                };
                if (item[iterator] === null ||
                    item[iterator] === undefined ||
                    item[iterator] === '') {
                    newData['$'] = {
                        'xsi:nil': 'true',
                    };
                    delete newData['_'];
                }
                item[iterator] = newData;
            }
        }
    }
    const builder = new xml2js_1.Builder({});
    const forxml = {
        [modalidad.name]: {
            $: modalidad.attributes,
            cabecera: data.cabecera,
            detalle: data.detalle,
        },
    };
    return builder.buildObject(forxml);
}
exports.generarFacturaXml = generarFacturaXml;
async function xmlToJson(xml) {
    const parser = new xml2js_1.Parser({
        explicitArray: false,
        ignoreAttrs: true,
    });
    const json = await parser.parseStringPromise(xml);
    return json;
}
exports.xmlToJson = xmlToJson;
function siatISOdateTime(value) {
    const offset = value.getTimezoneOffset();
    value.setMinutes(value.getMinutes() - offset);
    return value.toISOString().replace('Z', '');
}
exports.siatISOdateTime = siatISOdateTime;
//# sourceMappingURL=index.js.map