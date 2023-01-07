"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const base_model_1 = require("./base.model");
class User extends base_model_1.BaseModel {
    static get tableName() {
        return 'users';
    }
    $formatJson(json) {
        json = super.$formatJson(json);
        delete json.password;
        return json;
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map