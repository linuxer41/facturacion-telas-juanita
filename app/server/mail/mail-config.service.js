"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const path_1 = require("path");
let MailConfigService = class MailConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createMailerOptions() {
        return {
            transport: {
                host: this.configService.get('mail.host'),
                port: this.configService.get('mail.port'),
                ignoreTLS: this.configService.get('mail.ignoreTLS'),
                secure: this.configService.get('mail.secure'),
                requireTLS: this.configService.get('mail.requireTLS'),
                auth: {
                    user: this.configService.get('mail.user'),
                    pass: this.configService.get('mail.password'),
                },
            },
            defaults: {
                from: `"${this.configService.get('mail.defaultName')}" <${this.configService.get('mail.defaultEmail')}>`,
            },
            template: {
                dir: (0, path_1.resolve)(this.configService.get('mail.templatesDir') || '.', 'mail-templates'),
                adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        };
    }
};
MailConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailConfigService);
exports.MailConfigService = MailConfigService;
//# sourceMappingURL=mail-config.service.js.map