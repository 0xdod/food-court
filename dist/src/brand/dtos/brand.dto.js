"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandDTO = void 0;
const openapi = require("@nestjs/swagger");
class BrandDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
}
exports.BrandDTO = BrandDTO;
//# sourceMappingURL=brand.dto.js.map