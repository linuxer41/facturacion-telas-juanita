import { AppCrediantialDto } from 'src/decorators/global.decorator';
import { Client, RespuestaComunicacion, RespuestaVerificarNit } from 'src/siap-soap/FacturacionCodigos';
import { RespuestaCufdDTO } from './dto/RespuestaCufd.dto';
import { RespuestaCufdMasivoDTO } from './dto/RespuestaCufdMasivo.dto';
import { RespuestaCuisDTO } from './dto/RespuestaCuis.dto';
import { RespuestaCuisMasivoDTO } from './dto/RespuestaCuisMasivo.dto';
import { RespuestaNotificaRevocadoDTO } from './dto/RespuestaNotificaRevocado.dto';
import { SolicitudCufdDTO } from './dto/SolicitudCufd.dto';
import { SolicitudCufdMasivoDTO } from './dto/SolicitudCufdMasivo.dto';
import { SolicitudCuisDTO } from './dto/SolicitudCuis.dto';
import { SolicitudCuisMasivoSistemasDTO } from './dto/SolicitudCuisMasivoSistemas.dto';
import { SolicitudNotificaRevocadoDTO } from './dto/SolicitudNotificaRevocado.dto';
import { SolicitudVerificarNitDTO } from './dto/SolicitudVerificarNit.dto';
export declare class FacturacionCodigosService {
    private readonly soapClient;
    private readonly soapClientTest;
    constructor(soapClient: Client, soapClientTest: Client);
    getClient(credential: AppCrediantialDto, solicitud: any): Client;
    verificarComunicacion(credential: AppCrediantialDto, solicitud: any): Promise<RespuestaComunicacion>;
    verificarNit(credential: AppCrediantialDto, solicitud: SolicitudVerificarNitDTO): Promise<RespuestaVerificarNit>;
    cuisMasivo(credential: AppCrediantialDto, solicitud: SolicitudCuisMasivoSistemasDTO): Promise<RespuestaCuisMasivoDTO>;
    cufd(credential: AppCrediantialDto, solicitud: SolicitudCufdDTO): Promise<RespuestaCufdDTO>;
    notificaCertificadoRevocado(credential: AppCrediantialDto, solicitud: SolicitudNotificaRevocadoDTO): Promise<RespuestaNotificaRevocadoDTO>;
    cuis(credential: AppCrediantialDto, solicitud: SolicitudCuisDTO): Promise<RespuestaCuisDTO>;
    cufdMasivo(credential: AppCrediantialDto, solicitud: SolicitudCufdMasivoDTO): Promise<RespuestaCufdMasivoDTO>;
}
