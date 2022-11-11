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
exports.FacturasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mail_service_1 = require("../mail/mail.service");
const api_1 = require("../utils/api");
const typeorm_2 = require("typeorm");
const factura_entity_1 = require("./entities/factura.entity");
let FacturasService = class FacturasService {
    constructor(facturasRepository, mailService) {
        this.facturasRepository = facturasRepository;
        this.mailService = mailService;
    }
    async create(createFacturaDto) {
        const created = await this.facturasRepository.save(this.facturasRepository.create(createFacturaDto));
        return created;
    }
    findAll() {
        return this.facturasRepository.find();
    }
    findOne(id) {
        return this.facturasRepository.findOne({
            where: { id },
        });
    }
    update(id, updateFacturaDto) {
        return this.facturasRepository.save(this.facturasRepository.create(Object.assign({ id }, updateFacturaDto)));
    }
    remove(id) {
        return this.facturasRepository.delete(id);
    }
    async query(query) {
        const take = query.limit || 10;
        const page = query.page || 1;
        const skip = (page - 1) * take;
        const filter = [];
        if (query.clientName) {
            filter.push({ clientName: (0, typeorm_2.ILike)(`%${query.clientName}%`) });
        }
        if (query.nit) {
            filter.push({ nit: (0, typeorm_2.ILike)(`%${query.nit}%`) });
        }
        if (query.numero) {
            filter.push({ numero: (0, typeorm_2.ILike)(`%${query.numero}%`) });
        }
        if (query.cuf) {
            filter.push({ cuf: (0, typeorm_2.ILike)(`%${query.cuf}%`) });
        }
        const _query = {
            order: { numero: 'DESC' },
            take: take,
            skip: skip,
        };
        if (filter.length > 0) {
            _query['where'] = filter;
        }
        const queryBuilder = this.facturasRepository.createQueryBuilder('factura');
        queryBuilder.orderBy('factura.numero', 'DESC');
        queryBuilder.leftJoinAndSelect('factura.user', 'user');
        queryBuilder.take(take);
        queryBuilder.skip(skip);
        if (filter.length > 0) {
            filter.forEach((f) => {
                queryBuilder.orWhere(f);
            });
        }
        if (query.tipoEmision) {
            queryBuilder.andWhere('factura.tipoEmision = :tipoEmision', {
                tipoEmision: query.tipoEmision,
            });
        }
        if (query.estado) {
            queryBuilder.andWhere('factura.estado = :estado', {
                estado: query.estado,
            });
        }
        if (query.mainFacturas) {
            queryBuilder.andWhere('factura.tipoEmision in (:...tipoEmision) and factura.estado in (:...estado)', {
                tipoEmision: ['EN LINEA', 'FUERA DE LINEA'],
                estado: ['VALIDADA', 'ANULADA'],
            });
        }
        if (query.desde) {
            queryBuilder.andWhere('factura.fechaFactura >= :desde', {
                desde: query.desde,
            });
        }
        if (query.hasta) {
            queryBuilder.andWhere('factura.fechaFactura <= :hasta', {
                hasta: query.hasta,
            });
        }
        const data = await queryBuilder.getManyAndCount();
        return (0, api_1.paginateResponse)(data, page, take);
    }
    async packages(query) {
        const take = query.limit || 10;
        const page = query.page || 1;
        const skip = (page - 1) * take;
        const filter = [];
        if (query.clientName) {
            filter.push({ clientName: (0, typeorm_2.ILike)(`%${query.clientName}%`) });
        }
        if (query.nit) {
            filter.push({ nit: (0, typeorm_2.ILike)(`%${query.nit}%`) });
        }
        if (query.numero) {
            filter.push({ numero: (0, typeorm_2.ILike)(`%${query.numero}%`) });
        }
        if (query.cuf) {
            filter.push({ cuf: (0, typeorm_2.ILike)(`%${query.cuf}%`) });
        }
        const _query = {
            order: { numero: 'DESC' },
            take: take,
            skip: skip,
        };
        if (filter.length > 0) {
            _query['where'] = filter;
        }
        const queryBuilder = this.facturasRepository.createQueryBuilder('factura');
        queryBuilder.orderBy('factura.numero', 'DESC');
        queryBuilder.take(take);
        queryBuilder.skip(skip);
        if (filter.length > 0) {
            filter.forEach((f) => {
                queryBuilder.orWhere(f);
            });
        }
        if (query.tipoEmision) {
            queryBuilder.andWhere('factura.tipoEmision = :tipoEmision', {
                tipoEmision: query.tipoEmision,
            });
        }
        if (query.estado) {
            queryBuilder.andWhere('factura.estado = :estado', {
                estado: query.estado,
            });
        }
        const data = await queryBuilder.getManyAndCount();
        return (0, api_1.paginateResponse)(data, page, take);
    }
    maxId() {
        return this.facturasRepository
            .createQueryBuilder()
            .select('MAX(numero)', 'max')
            .getRawOne();
    }
    async findByFechaFacturaRange(start, end, cufd) {
        return this.facturasRepository.findAndCount({
            where: {
                fechaFactura: (0, typeorm_2.Between)(start, end),
                cufd: cufd,
            },
        });
    }
    async findByCufd(cufd) {
        return this.facturasRepository.findAndCount({
            where: {
                estado: 'PENDIENTE',
                cufd: cufd,
            },
        });
    }
};
FacturasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(factura_entity_1.Factura)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mail_service_1.MailService])
], FacturasService);
exports.FacturasService = FacturasService;
//# sourceMappingURL=facturas.service.js.map