"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const objection_1 = require("objection");
class BaseModel extends objection_1.Model {
    $beforeUpdate() {
        this.updatedAt = new Date();
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=base.model.js.map