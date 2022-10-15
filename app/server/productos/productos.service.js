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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const api_1 = require("../utils/api");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("./entities/producto.entity");
let ProductosService = class ProductosService {
    constructor(productosRepository) {
        this.productosRepository = productosRepository;
    }
    create(createProductoDto) {
        return this.productosRepository.save(this.productosRepository.create(createProductoDto));
    }
    findAll() {
        return this.productosRepository.find();
    }
    findOne(id) {
        return this.productosRepository.findOne({
            where: { id },
        });
    }
    update(id, updateProductoDto) {
        return this.productosRepository.save(this.productosRepository.create(Object.assign({ id }, updateProductoDto)));
    }
    remove(id) {
        return this.productosRepository.delete(id);
    }
    async query(query) {
        const take = query.limit || 10;
        const page = query.page || 1;
        const skip = (page - 1) * take;
        const filter = [];
        if (query.detalle) {
            filter.push({ detalle: (0, typeorm_2.ILike)(`%${query.detalle}%`) });
        }
        const _query = {
            order: { detalle: 'DESC' },
            take: take,
            skip: skip,
        };
        if (filter.length > 0) {
            _query['where'] = filter;
        }
        const data = await this.productosRepository.findAndCount(_query);
        return (0, api_1.paginateResponse)(data, page, take);
    }
};
ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductosService);
exports.ProductosService = ProductosService;
//# sourceMappingURL=productos.service.js.map