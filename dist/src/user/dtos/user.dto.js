"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const openapi = require("@nestjs/swagger");
class UserDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, role: { required: true, enum: require("../../core/constants/role.enum").ROLE }, createdAt: { required: true, type: () => Date } };
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.dto.js.map