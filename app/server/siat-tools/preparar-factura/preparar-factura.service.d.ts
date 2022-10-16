import { FacturaCompraVentaDTO } from './dto/FacturaCompraVenta.dto';
import { FacturasService } from 'src/facturas/facturas.service';
import { SolicitudValidarPaqueteFactura } from './dto/SolicitudValidarPaqueteFactura';
import { FacturacionOperacionesService } from 'src/siat-api/facturacion-operaciones/facturacion-operaciones.service';
import { ServicioFacturacionCompraVentaService } from 'src/siat-api/servicio-facturacion-compra-venta/servicio-facturacion-compra-venta.service';
import { AppCrediantialDto } from 'src/decorators/global.decorator';
import { MailService } from 'src/mail/mail.service';
import { SolicitudEnviarEmailFacturaDTO } from './dto/SolicitudEnviarEmailFactura';
import { ClientesService } from 'src/clientes/clientes.service';
import { SolicitudAnularEmailFacturaDTO } from './dto/SolicitudAnularEmailFactura.dto';
import { ConfigService } from '@nestjs/config';
export declare class PrepararFacturaService {
    private facturasService;
    private facturacionOperacionesService;
    private mailService;
    private clientesService;
    private configService;
    private servicioFacturacionCompraVentaService;
    constructor(facturasService: FacturasService, facturacionOperacionesService: FacturacionOperacionesService, mailService: MailService, clientesService: ClientesService, configService: ConfigService, servicioFacturacionCompraVentaService: ServicioFacturacionCompraVentaService);
    facturaCompraVenta(data: FacturaCompraVentaDTO): Promise<{
        tipoDocumento: string;
        json: unknown;
        zip: string;
        sha256: string;
        xml: string;
    }>;
    validarContingencia(credential: AppCrediantialDto, solicitud: SolicitudValidarPaqueteFactura): Promise<import("../../siat-api/servicio-facturacion-compra-venta/dto/RespuestaServicioFacturacion.dto").RespuestaServicioFacturacionDTO>;
    enviarEmailFactura(solicitud: SolicitudEnviarEmailFacturaDTO): Promise<{
        message: string;
    }>;
    anularEmailFactura(solicitud: SolicitudAnularEmailFacturaDTO): Promise<{
        message: string;
    }>;
}
