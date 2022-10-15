import { AppCrediantialDto } from 'src/decorators/global.decorator';
import { Client } from 'src/siap-soap/FacturacionOperaciones';
import { RespuestaCierrePuntoVentaDTO } from './dto/RespuestaCierrePuntoVenta.dto';
import { RespuestaCierreSistemasDTO } from './dto/RespuestaCierreSistemas.dto';
import { RespuestaConsultaPuntoVentaDTO } from './dto/RespuestaConsultaPuntoVenta.dto';
import { RespuestaListaEventosDTO } from './dto/RespuestaListaEventos.dto';
import { RespuestaPuntoVentaComisionistaDTO } from './dto/RespuestaPuntoVentaComisionista.dto';
import { RespuestaRegistroPuntoVentaDTO } from './dto/RespuestaRegistroPuntoVenta.dto';
import { SolicitudCierrePuntoVentaDTO } from './dto/SolicitudCierrePuntoVenta.dto';
import { SolicitudConsultaEventoDTO } from './dto/SolicitudConsultaEvento.dto';
import { SolicitudConsultaPuntoVentaDTO } from './dto/SolicitudConsultaPuntoVenta.dto';
import { SolicitudEventoSignificativoDTO } from './dto/SolicitudEventoSignificativo.dto';
import { SolicitudOperacionesDTO } from './dto/SolicitudOperaciones.dto';
import { SolicitudPuntoVentaComisionistaDTO } from './dto/SolicitudPuntoVentaComisionista.dto';
import { SolicitudRegistroPuntoVentaDTO } from './dto/SolicitudRegistroPuntoVenta.dto';
export declare class FacturacionOperacionesService {
    private readonly soapClient;
    private readonly soapClientTest;
    constructor(soapClient: Client, soapClientTest: Client);
    getClient(credential: AppCrediantialDto, solicitud: any): Client;
    verificarComunicacion(credential: AppCrediantialDto, solicitud: any): Promise<any>;
    registroPuntoVenta(credential: AppCrediantialDto, solicitud: SolicitudRegistroPuntoVentaDTO): Promise<RespuestaRegistroPuntoVentaDTO>;
    registroPuntoVentaComisionista(credential: AppCrediantialDto, solicitud: SolicitudPuntoVentaComisionistaDTO): Promise<RespuestaPuntoVentaComisionistaDTO>;
    cierreOperacionesSistema(credential: AppCrediantialDto, solicitud: SolicitudOperacionesDTO): Promise<RespuestaCierreSistemasDTO>;
    consultaEventoSignificativo(credential: AppCrediantialDto, solicitud: SolicitudConsultaEventoDTO): Promise<RespuestaListaEventosDTO>;
    consultaPuntoVenta(credential: AppCrediantialDto, solicitud: SolicitudConsultaPuntoVentaDTO): Promise<RespuestaConsultaPuntoVentaDTO>;
    registroEventoSignificativo(credential: AppCrediantialDto, solicitud: SolicitudEventoSignificativoDTO): Promise<RespuestaListaEventosDTO>;
    cierrePuntoVenta(credential: AppCrediantialDto, solicitud: SolicitudCierrePuntoVentaDTO): Promise<RespuestaCierrePuntoVentaDTO>;
}
