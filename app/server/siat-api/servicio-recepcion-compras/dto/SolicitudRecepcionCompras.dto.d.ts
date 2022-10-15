import { SolicitudRecepcionCompras } from 'src/siap-soap/ServicioRecepcionCompras';
import { BaseRecepcionComprasDTO } from './BaseRecepcionCompras.dto';
export declare class SolicitudRecepcionComprasDTO extends BaseRecepcionComprasDTO implements SolicitudRecepcionCompras {
    archivo?: string;
    cantidadFacturas?: string;
    fechaEnvio?: string;
    gestion?: string;
    hashArchivo?: string;
    periodo?: string;
}
