import { AppCrediantialDto, VerificarComunicacionDto } from 'src/decorators/global.decorator';
import { ServicioFacturacionCompraVentaService } from './servicio-facturacion-compra-venta.service';
import { RespuestaServicioFacturacionDTO } from './dto/RespuestaServicioFacturacion.dto';
import { ReturnDTO } from './dto/Return.dto';
import { SolicitudRecepcionAnexosDTO } from './dto/SolicitudRecepcionAnexos.dto';
import { SolicitudServicioAnulacionFacturaDTO } from './dto/SolicitudServicioAnulacionFactura.dto';
import { SolicitudServicioRecepcionFacturaDTO } from './dto/SolicitudServicioRecepcionFactura.dto';
import { SolicitudServicioRecepcionMasivaDTO } from './dto/SolicitudServicioRecepcionMasiva.dto';
import { SolicitudServicioRecepcionPaqueteDTO } from './dto/SolicitudServicioRecepcionPaquete.dto';
import { SolicitudServicioValidacionRecepcionMasivaDTO } from './dto/SolicitudServicioValidacionRecepcionMasiva.dto';
import { SolicitudServicioVerificacionEstadoFacturaDTO } from './dto/SolicitudServicioVerificacionEstadoFactura.dto';
export declare class ServicioFacturacionCompraVentaController {
    private readonly servicioFacturacionCompraVentaService;
    constructor(servicioFacturacionCompraVentaService: ServicioFacturacionCompraVentaService);
    recepcionPaqueteFactura(credential: AppCrediantialDto, solicitud: SolicitudServicioRecepcionPaqueteDTO): Promise<RespuestaServicioFacturacionDTO>;
    verificarComunicacion(credential: AppCrediantialDto, solicitud: VerificarComunicacionDto): Promise<ReturnDTO>;
    recepcionFactura(credential: AppCrediantialDto, solicitud: SolicitudServicioRecepcionFacturaDTO): Promise<RespuestaServicioFacturacionDTO>;
    validacionRecepcionMasivaFactura(credential: AppCrediantialDto, solicitud: SolicitudServicioValidacionRecepcionMasivaDTO): Promise<RespuestaServicioFacturacionDTO>;
    recepcionAnexos(credential: AppCrediantialDto, solicitud: SolicitudRecepcionAnexosDTO): Promise<RespuestaServicioFacturacionDTO>;
    recepcionMasivaFactura(credential: AppCrediantialDto, solicitud: SolicitudServicioRecepcionMasivaDTO): Promise<RespuestaServicioFacturacionDTO>;
    validacionRecepcionPaqueteFactura(credential: AppCrediantialDto, solicitud: SolicitudServicioValidacionRecepcionMasivaDTO): Promise<RespuestaServicioFacturacionDTO>;
    verificacionEstadoFactura(credential: AppCrediantialDto, solicitud: SolicitudServicioVerificacionEstadoFacturaDTO): Promise<RespuestaServicioFacturacionDTO>;
    anulacionFactura(credential: AppCrediantialDto, solicitud: SolicitudServicioAnulacionFacturaDTO): Promise<RespuestaServicioFacturacionDTO>;
}
