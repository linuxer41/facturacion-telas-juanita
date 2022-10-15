import { AppCrediantialDto, VerificarComunicacionDto } from 'src/decorators/global.decorator';
import { RespuestaCufdDTO } from './dto/RespuestaCufd.dto';
import { RespuestaCufdMasivoDTO } from './dto/RespuestaCufdMasivo.dto';
import { RespuestaCuisDTO } from './dto/RespuestaCuis.dto';
import { RespuestaCuisMasivoDTO } from './dto/RespuestaCuisMasivo.dto';
import { SolicitudCufdDTO } from './dto/SolicitudCufd.dto';
import { SolicitudCufdMasivoDTO } from './dto/SolicitudCufdMasivo.dto';
import { SolicitudCuisDTO } from './dto/SolicitudCuis.dto';
import { SolicitudCuisMasivoSistemasDTO } from './dto/SolicitudCuisMasivoSistemas.dto';
import { SolicitudNotificaRevocadoDTO } from './dto/SolicitudNotificaRevocado.dto';
import { SolicitudVerificarNitDTO } from './dto/SolicitudVerificarNit.dto';
import { FacturacionCodigosService } from './facturacion-codigos.service';
export declare class FacturacionCodigosController {
    private readonly facturacionCodigosService;
    constructor(facturacionCodigosService: FacturacionCodigosService);
    verificarComunicacion(credential: AppCrediantialDto, solicitud: VerificarComunicacionDto): Promise<import("../../siap-soap/FacturacionCodigos").RespuestaComunicacion>;
    verificarNit(credential: AppCrediantialDto, solicitud: SolicitudVerificarNitDTO): Promise<import("../../siap-soap/FacturacionCodigos").RespuestaVerificarNit>;
    cuisMasivo(credential: AppCrediantialDto, solicitud: SolicitudCuisMasivoSistemasDTO): Promise<RespuestaCuisMasivoDTO>;
    cufd(credential: AppCrediantialDto, solicitud: SolicitudCufdDTO): Promise<RespuestaCufdDTO>;
    notificaCertificadoRevocado(credential: AppCrediantialDto, solicitud: SolicitudNotificaRevocadoDTO): Promise<import("./dto/RespuestaNotificaRevocado.dto").RespuestaNotificaRevocadoDTO>;
    cuis(solicitud: SolicitudCuisDTO, credential: AppCrediantialDto): Promise<RespuestaCuisDTO>;
    cufdMasivo(credential: AppCrediantialDto, solicitud: SolicitudCufdMasivoDTO): Promise<RespuestaCufdMasivoDTO>;
}
