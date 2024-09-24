"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const swagger_1 = require("@nestjs/swagger");
const express_1 = __importDefault(require("express"));
const app_module_1 = require("./app.module");
let cachedServer;
async function bootstrap() {
    if (!cachedServer) {
        const expressApp = (0, express_1.default)();
        const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
        const config = new swagger_1.DocumentBuilder()
            .setTitle('String Masking API')
            .setDescription('API to mask strings')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(nestApp, config);
        swagger_1.SwaggerModule.setup('api', nestApp, document);
        nestApp.setGlobalPrefix('api');
        nestApp.enableCors();
        await nestApp.init();
        cachedServer = (0, serverless_express_1.default)({ app: expressApp });
    }
    return cachedServer;
}
const handler = async (event, context, callback) => {
    console.log("Intercepting event ", JSON.stringify(event));
    const server = await bootstrap();
    return server(event, context, callback);
};
exports.handler = handler;
//# sourceMappingURL=serverless.js.map