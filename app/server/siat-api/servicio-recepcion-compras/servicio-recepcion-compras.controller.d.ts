import { AppCrediantialDto, VerificarComunicacionDto } from 'src/decorators/global.decorator';
import { ServicioRecepcionComprasService } from './servicio-recepcion-compras.service';
import { RespuestaServicioFacturacionDTO } from './dto/RespuestaServicioFacturacion.dto';
import { RespuestaServicioFacturacion1DTO } from './dto/RespuestaServicioFacturacion1.dto';
import { SolicitudAnulacionCompraDTO } from './dto/SolicitudAnulacionCompra.dto';
import { SolicitudConsultaComprasDTO } from './dto/SolicitudConsultaCompras.dto';
import { SolicitudRecepcionComprasDTO } from './dto/SolicitudRecepcionCompras.dto';
import { SolicitudValidacionRecepcionComprasDTO } from './dto/SolicitudValidacionRecepcionCompras.dto';
export declare class ServicioRecepcionComprasController {
    private readonly servicioRecepcionComprasService;
    constructor(servicioRecepcionComprasService: ServicioRecepcionComprasService);
    verificarComunicacion(credential: AppCrediantialDto, solicitud: VerificarComunicacionDto): Promise<RespuestaServicioFacturacionDTO>;
    validacionRecepcionPaqueteCompras(credential: AppCrediantialDto, solicitud: SolicitudValidacionRecepcionComprasDTO): Promise<RespuestaServicioFacturacionDTO>;
    recepcionPaqueteCompras(credential: AppCrediantialDto, solicitud: SolicitudRecepcionComprasDTO): Promise<RespuestaServicioFacturacion1DTO>;
    anulacionCompra(credential: AppCrediantialDto, solicitud: SolicitudAnulacionCompraDTO): Promise<RespuestaServicioFacturacionDTO>;
    confirmacionCompras(credential: AppCrediantialDto, solicitud: SolicitudRecepcionComprasDTO): Promise<RespuestaServicioFacturacionDTO>;
    consultaCompras(credential: AppCrediantialDto, solicitud: SolicitudConsultaComprasDTO): Promise<RespuestaServicioFacturacionDTO>;
}
