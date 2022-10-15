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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_i18n_1 = require("nestjs-i18n");
const path_1 = require("path");
let MailService = class MailService {
    constructor(i18n, mailerService, configService) {
        this.i18n = i18n;
        this.mailerService = mailerService;
        this.configService = configService;
    }
    async userSignUp(mailData) {
        await this.mailerService.sendMail({
            to: mailData.to,
            subject: await this.i18n.t('common.confirmEmail'),
            text: `${this.configService.get('app.frontendDomain')}/confirm-email/${mailData.data.hash} ${await this.i18n.t('common.confirmEmail')}`,
            template: 'activation',
            context: {
                title: await this.i18n.t('common.confirmEmail'),
                url: `${this.configService.get('app.frontendDomain')}/confirm-email/${mailData.data.hash}`,
                actionTitle: await this.i18n.t('common.confirmEmail'),
                app_name: this.configService.get('app.name'),
                text1: await this.i18n.t('confirm-email.text1'),
                text2: await this.i18n.t('confirm-email.text2'),
                text3: await this.i18n.t('confirm-email.text3'),
            },
        });
    }
    async forgotPassword(mailData) {
        await this.mailerService.sendMail({
            to: mailData.to,
            subject: await this.i18n.t('common.resetPassword'),
            text: `${this.configService.get('app.frontendDomain')}/password-change/${mailData.data.hash} ${await this.i18n.t('common.resetPassword')}`,
            template: 'reset-password',
            context: {
                title: await this.i18n.t('common.resetPassword'),
                url: `${this.configService.get('app.frontendDomain')}/password-change/${mailData.data.hash}`,
                actionTitle: await this.i18n.t('common.resetPassword'),
                app_name: this.configService.get('app.name'),
                text1: await this.i18n.t('reset-password.text1'),
                text2: await this.i18n.t('reset-password.text2'),
                text3: await this.i18n.t('reset-password.text3'),
                text4: await this.i18n.t('reset-password.text4'),
            },
        });
    }
    async sendInvoiceMail(mailData) {
        await this.mailerService.sendMail({
            to: mailData.to,
            subject: 'Factura: ' + mailData.data.numero,
            text: 'Factura computarizada en linea',
            template: 'factura-electronica',
            context: {
                title: 'Factura computarizada en linea',
                app_name: 'Factura emitida exitosamente',
                text1: 'DETALLE DE LA FACTURA',
                text2: 'NÚMERO FACTURA: ' + mailData.data.numero,
                text3: 'CÓD. AUTORIZACIÓN: ' + mailData.data.cuf,
                text4: 'MONTO: ' + mailData.data.monto,
                text5: 'CLIENTE: ' + mailData.data.cliente,
            },
            attachments: [
                {
                    filename: `factura_${mailData.data.numero}.pdf`,
                    path: (0, path_1.resolve)('.', mailData.data.pdf),
                    contentType: 'application/pdf',
                },
                {
                    filename: `factura_${mailData.data.numero}.xml`,
                    path: (0, path_1.resolve)('.', mailData.data.xml),
                    contentType: 'application/xml',
                },
            ],
        });
    }
    async sendCancelInvoiceMail(mailData) {
        await this.mailerService.sendMail({
            to: mailData.to,
            subject: 'Factura No. ' + mailData.data.numero + ' anulada',
            text: 'Factura  Anulada',
            template: 'anulacion-factura-electronica',
            context: {
                title: 'Factura Anulada',
                app_name: 'Factura Anulada',
                text1: 'DETALLE DE LA FACTURA',
                text2: 'NÚMERO FACTURA: ' + mailData.data.numero,
                text3: 'CÓD. AUTORIZACIÓN: ' + mailData.data.cuf,
                text4: 'MOTIVO: ' + mailData.data.motivo,
                text5: 'CLIENTE: ' + mailData.data.cliente,
            },
        });
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nService,
        mailer_1.MailerService,
        config_1.ConfigService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map