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
exports.StringMaskingController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const masking_service_1 = require("./masking.service");
let StringMaskingController = class StringMaskingController {
    constructor(maskifyService) {
        this.maskifyService = maskifyService;
    }
    async maskString(input) {
        const masked = this.maskifyService.mask(input);
        return masked;
    }
};
exports.StringMaskingController = StringMaskingController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'input', type: String, required: true }),
    __param(0, (0, common_1.Query)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StringMaskingController.prototype, "maskString", null);
exports.StringMaskingController = StringMaskingController = __decorate([
    (0, swagger_1.ApiTags)('string-masking'),
    (0, common_1.Controller)('string-masking'),
    __metadata("design:paramtypes", [masking_service_1.MaskingService])
], StringMaskingController);
//# sourceMappingURL=string-masking.controller.js.map