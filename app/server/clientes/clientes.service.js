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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const api_1 = require("../utils/api");
const typeorm_2 = require("typeorm");
const cliente_entity_1 = require("./entities/cliente.entity");
let ClientesService = class ClientesService {
    constructor(clientesRepository) {
        this.clientesRepository = clientesRepository;
    }
    create(createClienteDto) {
        return this.clientesRepository.save(this.clientesRepository.create(createClienteDto));
    }
    async query(query) {
        const take = query.limit || 10;
        const page = query.page || 1;
        const skip = (page - 1) * take;
        const filter = [];
        if (query.name) {
            filter.push({ name: (0, typeorm_2.ILike)(`%${query.name}%`) });
        }
        if (query.nit) {
            filter.push({ nit: (0, typeorm_2.ILike)(`%${query.nit}%`) });
        }
        if (query.email) {
            filter.push({ email: (0, typeorm_2.ILike)(`%${query.email}%`) });
        }
        if (query.exactNit) {
            filter.push({ nit: query.exactNit });
        }
        const _query = {
            order: { name: 'DESC' },
            take: take,
            skip: skip,
        };
        if (filter.length > 0) {
            _query['where'] = filter;
        }
        const data = await this.clientesRepository.findAndCount(_query);
        return (0, api_1.paginateResponse)(data, page, take);
    }
    findAll() {
        return this.clientesRepository.find();
    }
    findOne(id) {
        return this.clientesRepository.findOne({
            where: { id },
        });
    }
    findOneByNit(nit) {
        return this.clientesRepository.findOne({
            where: { nit },
        });
    }
    update(id, updateClienteDto) {
        return this.clientesRepository.save(this.clientesRepository.create(Object.assign({ id }, updateClienteDto)));
    }
    remove(id) {
        return this.clientesRepository.delete(id);
    }
};
ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientesService);
exports.ClientesService = ClientesService;
//# sourceMappingURL=clientes.service.js.map