"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LostModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var lost_controllers_1 = require("./lost.controllers");
var lost_entity_1 = require("./lost.entity");
var lost_service_1 = require("./lost.service");
var LostModule = /** @class */ (function () {
    function LostModule() {
    }
    LostModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([lost_entity_1.lost_historytbl])],
            providers: [lost_service_1.LostService],
            controllers: [lost_controllers_1.LostController]
        })
    ], LostModule);
    return LostModule;
}());
exports.LostModule = LostModule;
