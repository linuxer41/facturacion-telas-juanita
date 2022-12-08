import { AppCrediantialDto } from 'src/decorators/global.decorator';
import { FacturaCompraVentaDTO } from './dto/FacturaCompraVenta.dto';
import { SolicitudAnularEmailFacturaDTO } from './dto/SolicitudAnularEmailFactura.dto';
import { SolicitudEnviarEmailFacturaDTO } from './dto/SolicitudEnviarEmailFactura';
import { SolicitudValidarPaqueteFactura } from './dto/SolicitudValidarPaqueteFactura';
import { PrepararFacturaService } from './preparar-factura.service';
export declare class PrepararFacturaController {
    private readonly prepararFacturaService;
    constructor(prepararFacturaService: PrepararFacturaService);
    facturaCompraVenta(data: FacturaCompraVentaDTO): Promise<any>;
    validarPaquete(credential: AppCrediantialDto, data: SolicitudValidarPaqueteFactura): Promise<any>;
    enviarEmailFactura(data: SolicitudEnviarEmailFacturaDTO): Promise<any>;
    anularEmailFactura(data: SolicitudAnularEmailFacturaDTO): Promise<any>;
    facturasPendientes(): Promise<any>;
}
