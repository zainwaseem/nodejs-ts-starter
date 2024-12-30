"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var app = (0, express_1.default)();
var swagger_json_1 = __importDefault(require("../swagger.json"));
var swaggerSpec = (0, swagger_jsdoc_1.default)(swagger_json_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use(express_1.default.json());
app.use("/api/v1", user_routes_1.default);
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
