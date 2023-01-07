"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAddonDTO = void 0;
const openapi = require("@nestjs/swagger");
class MealAddonDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, price: { required: true, type: () => Number }, description: { required: true, type: () => String }, category: { required: true, type: () => String }, createdAt: { required: true, type: () => Date } };
    }
}
exports.MealAddonDTO = MealAddonDTO;
//# sourceMappingURL=meal-addon.dto.js.map