import { FacturaCompraVentaCabeceraDTO } from './FacturaCompraVentaCabecera.dto';
import { FacturaCompraVentaDetalleDTO } from './FacturaCompraVentaDetalle.dto';
import { SolicitudPreparFactura } from './SolicitudPreparFactura.dto';
export declare class FacturaCompraVentaDTO {
    solicitud: SolicitudPreparFactura;
    cabecera: FacturaCompraVentaCabeceraDTO;
    detalle: FacturaCompraVentaDetalleDTO[];
}
