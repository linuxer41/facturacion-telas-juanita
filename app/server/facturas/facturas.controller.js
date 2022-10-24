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
exports.FacturasController = void 0;
const common_1 = require("@nestjs/common");
const facturas_service_1 = require("./facturas.service");
const create_factura_dto_1 = require("./dto/create-factura.dto");
const update_factura_dto_1 = require("./dto/update-factura.dto");
const swagger_1 = require("@nestjs/swagger");
const query_factura_dto_1 = require("./dto/query-factura.dto");
const passport_1 = require("@nestjs/passport");
const global_decorator_1 = require("../decorators/global.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
let FacturasController = class FacturasController {
    constructor(facturasService, usersService) {
        this.facturasService = facturasService;
        this.usersService = usersService;
    }
    async create(createFacturaDto, user) {
        try {
            const userId = user.id;
            const _user = await this.usersService.findOne({ id: userId });
            if (!_user) {
                throw new common_1.BadRequestException('User not found');
            }
            console.log(_user);
            createFacturaDto.user = _user;
            console.log(createFacturaDto);
            return this.facturasService.create(createFacturaDto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    findAll(query, user) {
        console.log('user', user);
        return this.facturasService.query(query);
    }
    findOne(id) {
        return this.facturasService.findOne(+id);
    }
    update(id, updateFacturaDto) {
        return this.facturasService.update(+id, updateFacturaDto);
    }
    remove(id) {
        return this.facturasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, global_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_factura_dto_1.CreateFacturaDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FacturasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, global_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_factura_dto_1.QueryFacturaDto, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], FacturasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacturasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_factura_dto_1.UpdateFacturaDto]),
    __metadata("design:returntype", void 0)
], FacturasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacturasController.prototype, "remove", null);
FacturasController = __decorate([
    (0, swagger_1.ApiTags)('facturas'),
    (0, common_1.Controller)('facturas'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [facturas_service_1.FacturasService,
        users_service_1.UsersService])
], FacturasController);
exports.FacturasController = FacturasController;
//# sourceMappingURL=facturas.controller.js.map