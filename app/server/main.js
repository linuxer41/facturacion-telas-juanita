"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const express_1 = require("express");
const app_module_1 = require("./app.module");
const serializer_interceptor_1 = require("./utils/serializer.interceptor");
const validation_options_1 = require("./utils/validation-options");
const fs_1 = require("fs");
async function bootstrap() {
    (0, fs_1.mkdirSync)('./files/invoices', { recursive: true });
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    const configService = app.get(config_1.ConfigService);
    app.enableShutdownHooks();
    app.setGlobalPrefix(configService.get('app.apiPrefix'), {
        exclude: ['/'],
    });
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    app.useGlobalInterceptors(new serializer_interceptor_1.SerializerInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe(validation_options_1.default));
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.disable('x-powered-by');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API')
        .setDescription('API docs')
        .setVersion('1.0')
        .addApiKey({
        name: 'api_key',
        description: 'API key proporsionado por IATHINGS',
        type: 'apiKey',
    }, 'api_key')
        .addApiKey({
        name: 'siat_api_key',
        description: 'API key proporsionado por SIAT impuestos nacionales',
        type: 'apiKey',
    }, 'siat_api_key')
        .addBearerAuth({
        description: 'Token de autenticación para acceder a la API',
        type: 'http',
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(configService.get('app.port'));
}
void bootstrap();
//# sourceMappingURL=main.js.map