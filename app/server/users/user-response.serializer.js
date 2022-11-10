"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userResponseSerializer = (user) => {
    delete user.hash;
};
exports.default = userResponseSerializer;
//# sourceMappingURL=user-response.serializer.js.map