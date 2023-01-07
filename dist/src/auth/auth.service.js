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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../database/models");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userModel
            .query()
            .whereRaw('LOWER(email) = LOWER(?)', email)
            .first();
        if (!user) {
            throw new common_1.ConflictException('Invalid credentials');
        }
        const isPasswordValid = await this.validateUserPassword(user, password);
        if (!isPasswordValid) {
            throw new common_1.ConflictException('Invalid credentials');
        }
        return {
            user,
            token: this.jwtService.sign({ email: user.email, sub: user.id }),
        };
    }
    async register(registerDto) {
        const { email, password, name, role } = registerDto;
        const existingEmail = await this.userModel
            .query()
            .whereRaw('LOWER(email) = LOWER(?)', email)
            .first();
        if (existingEmail) {
            throw new common_1.ConflictException('Email already exists');
        }
        const passwordHash = await this.hashPassword(password);
        const user = await this.userModel
            .query()
            .insert({
            email,
            password: passwordHash,
            name,
            role,
        })
            .returning(['id', 'email', 'name', 'role']);
        return user;
    }
    async hashPassword(password) {
        const saltOrRounds = 10;
        return bcrypt.hash(password, saltOrRounds);
    }
    async validateUserPassword(user, passwordText) {
        return bcrypt.compare(passwordText, user.password);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(models_1.User.name)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map