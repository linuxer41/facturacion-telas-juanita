"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('auth', () => ({
    secret: process.env.AUTH_JWT_SECRET || 'secret',
    expires: process.env.AUTH_JWT_TOKEN_EXPIRES_IN || '10y',
}));
//# sourceMappingURL=auth.config.js.map