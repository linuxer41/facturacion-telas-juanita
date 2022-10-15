import { FacturaCompraVentaDTO } from '../dto/FacturaCompraVenta.dto';
export declare const modalidadesFacturacion: {
    codigo: number;
    name: string;
    attributes: {
        'xmlns:xsi': string;
        'xsi:noNamespaceSchemaLocation': string;
    };
}[];
export declare const getModalidadDef: (data: FacturaCompraVentaDTO) => {
    codigo: number;
    name: string;
    attributes: {
        'xmlns:xsi': string;
        'xsi:noNamespaceSchemaLocation': string;
    };
};
export declare function concatenarParaFactura(data: FacturaCompraVentaDTO): string;
export declare function calcularDigitoMod11(data: FacturaCompraVentaDTO, numDig?: number, limMult?: number, x10?: boolean): string;
export declare function toBase16(value: string): string;
export declare function generateCuf(data: FacturaCompraVentaDTO): string;
export declare function generarFacturaXml(data: FacturaCompraVentaDTO): string;
export declare function xmlToJson(xml: string): Promise<any>;
export declare function siatISOdateTime(value: Date): string;
