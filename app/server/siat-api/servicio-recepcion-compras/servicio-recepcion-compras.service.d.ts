import { AppCrediantialDto } from 'src/decorators/global.decorator';
import { Client } from 'src/siap-soap/ServicioRecepcionCompras';
import { RespuestaServicioFacturacionDTO } from './dto/RespuestaServicioFacturacion.dto';
import { RespuestaServicioFacturacion1DTO } from './dto/RespuestaServicioFacturacion1.dto';
import { ReturnDTO } from './dto/Return.dto';
import { SolicitudAnulacionCompraDTO } from './dto/SolicitudAnulacionCompra.dto';
import { SolicitudConsultaComprasDTO } from './dto/SolicitudConsultaCompras.dto';
import { SolicitudRecepcionComprasDTO } from './dto/SolicitudRecepcionCompras.dto';
import { SolicitudValidacionRecepcionComprasDTO } from './dto/SolicitudValidacionRecepcionCompras.dto';
export declare class ServicioRecepcionComprasService {
    private readonly soapClient;
    private readonly soapClientTest;
    constructor(soapClient: Client, soapClientTest: Client);
    getClient(credential: AppCrediantialDto, solicitud: any): Client;
    verificarComunicacion(credential: AppCrediantialDto, solicitud: any): Promise<ReturnDTO>;
    validacionRecepcionPaqueteCompras(credential: AppCrediantialDto, solicitud: SolicitudValidacionRecepcionComprasDTO): Promise<RespuestaServicioFacturacionDTO>;
    recepcionPaqueteCompras(credential: AppCrediantialDto, solicitud: SolicitudRecepcionComprasDTO): Promise<RespuestaServicioFacturacion1DTO>;
    anulacionCompra(credential: AppCrediantialDto, solicitud: SolicitudAnulacionCompraDTO): Promise<RespuestaServicioFacturacionDTO>;
    confirmacionCompras(credential: AppCrediantialDto, solicitud: SolicitudRecepcionComprasDTO): Promise<RespuestaServicioFacturacionDTO>;
    consultaCompras(credential: AppCrediantialDto, solicitud: SolicitudConsultaComprasDTO): Promise<RespuestaServicioFacturacionDTO>;
}
