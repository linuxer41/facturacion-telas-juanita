import { RespuestaConsultaPuntoVenta } from 'src/siap-soap/FacturacionOperaciones';
import { ListaPuntosVentasDTO } from './ListaPuntosVentas.dto';
import { MensajesListDTO } from './MensajesList.dto';
export declare class RespuestaConsultaPuntoVentaDTO implements RespuestaConsultaPuntoVenta {
    listaPuntosVentas?: ListaPuntosVentasDTO[];
    mensajesList?: MensajesListDTO[];
    transaccion?: string;
}
