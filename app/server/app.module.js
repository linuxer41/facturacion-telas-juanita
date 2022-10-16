"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const files_module_1 = require("./files/files.module");
const auth_module_1 = require("./auth/auth.module");
const database_config_1 = require("./config/database.config");
const auth_config_1 = require("./config/auth.config");
const app_config_1 = require("./config/app.config");
const mail_config_1 = require("./config/mail.config");
const file_config_1 = require("./config/file.config");
const facebook_config_1 = require("./config/facebook.config");
const google_config_1 = require("./config/google.config");
const twitter_config_1 = require("./config/twitter.config");
const apple_config_1 = require("./config/apple.config");
const path = require("path");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_apple_module_1 = require("./auth-apple/auth-apple.module");
const auth_facebook_module_1 = require("./auth-facebook/auth-facebook.module");
const auth_google_module_1 = require("./auth-google/auth-google.module");
const auth_twitter_module_1 = require("./auth-twitter/auth-twitter.module");
const i18n_module_1 = require("nestjs-i18n/dist/i18n.module");
const nestjs_i18n_1 = require("nestjs-i18n");
const typeorm_config_service_1 = require("./database/typeorm-config.service");
const mail_config_service_1 = require("./mail/mail-config.service");
const forgot_module_1 = require("./forgot/forgot.module");
const mail_module_1 = require("./mail/mail.module");
const home_module_1 = require("./home/home.module");
const typeorm_2 = require("typeorm");
const facturacion_codigos_module_1 = require("./siat-api/facturacion-codigos/facturacion-codigos.module");
const facturacion_operaciones_module_1 = require("./siat-api/facturacion-operaciones/facturacion-operaciones.module");
const facturacion_sincronizacion_module_1 = require("./siat-api/facturacion-sincronizacion/facturacion-sincronizacion.module");
const servicio_facturacion_compra_venta_module_1 = require("./siat-api/servicio-facturacion-compra-venta/servicio-facturacion-compra-venta.module");
const servicio_recepcion_compras_module_1 = require("./siat-api/servicio-recepcion-compras/servicio-recepcion-compras.module");
const preparar_factura_module_1 = require("./siat-tools/preparar-factura/preparar-factura.module");
const facturas_module_1 = require("./facturas/facturas.module");
const clientes_module_1 = require("./clientes/clientes.module");
const productos_module_1 = require("./productos/productos.module");
const cotizaciones_module_1 = require("./cotizaciones/cotizaciones.module");
const siat_config_1 = require("./config/siat.config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [
                    database_config_1.default,
                    auth_config_1.default,
                    app_config_1.default,
                    mail_config_1.default,
                    file_config_1.default,
                    facebook_config_1.default,
                    google_config_1.default,
                    twitter_config_1.default,
                    apple_config_1.default,
                    siat_config_1.default,
                ],
                envFilePath: ['.env'],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: typeorm_config_service_1.TypeOrmConfigService,
                dataSourceFactory: async (options) => {
                    const dataSource = await new typeorm_2.DataSource(options).initialize();
                    return dataSource;
                },
            }),
            mailer_1.MailerModule.forRootAsync({
                useClass: mail_config_service_1.MailConfigService,
            }),
            i18n_module_1.I18nModule.forRootAsync({
                useFactory: (configService) => ({
                    fallbackLanguage: configService.get('app.fallbackLanguage'),
                    loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
                }),
                resolvers: [
                    {
                        use: nestjs_i18n_1.HeaderResolver,
                        useFactory: (configService) => {
                            return configService.get('app.headerLanguage');
                        },
                        inject: [config_1.ConfigService],
                    },
                ],
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.resolve)((0, file_config_1.default)().filesLocationDir || '.', 'files'),
                serveRoot: '/files',
            }),
            users_module_1.UsersModule,
            files_module_1.FilesModule,
            auth_module_1.AuthModule,
            auth_facebook_module_1.AuthFacebookModule,
            auth_google_module_1.AuthGoogleModule,
            auth_twitter_module_1.AuthTwitterModule,
            auth_apple_module_1.AuthAppleModule,
            forgot_module_1.ForgotModule,
            mail_module_1.MailModule,
            home_module_1.HomeModule,
            facturacion_codigos_module_1.FacturacionCodigosModule,
            facturacion_operaciones_module_1.FacturacionOperacionesModule,
            facturacion_sincronizacion_module_1.FacturacionSincronizacionModule,
            servicio_facturacion_compra_venta_module_1.ServicioFacturacionCompraVentaModule,
            servicio_recepcion_compras_module_1.ServicioRecepcionComprasModule,
            preparar_factura_module_1.PrepararFacturaModule,
            facturas_module_1.FacturasModule,
            clientes_module_1.ClientesModule,
            productos_module_1.ProductosModule,
            cotizaciones_module_1.CotizacionesModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map