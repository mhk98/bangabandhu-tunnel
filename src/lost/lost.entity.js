"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.lost_historytbl = void 0;
var typeorm_1 = require("typeorm");
var lost_historytbl = /** @class */ (function () {
    function lost_historytbl() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], lost_historytbl.prototype, "lostHistory_ID");
    __decorate([
        (0, typeorm_1.Column)()
    ], lost_historytbl.prototype, "Card_ID");
    __decorate([
        (0, typeorm_1.Column)()
    ], lost_historytbl.prototype, "User_ID");
    __decorate([
        (0, typeorm_1.Column)()
    ], lost_historytbl.prototype, "Lost_Date");
    __decorate([
        (0, typeorm_1.Column)()
    ], lost_historytbl.prototype, "Last_Balance");
    __decorate([
        (0, typeorm_1.Column)()
    ], lost_historytbl.prototype, "Balance_Transferred");
    __decorate([
        (0, typeorm_1.Column)()
    ], lost_historytbl.prototype, "Card_Issue");
    lost_historytbl = __decorate([
        (0, typeorm_1.Entity)()
    ], lost_historytbl);
    return lost_historytbl;
}());
exports.lost_historytbl = lost_historytbl;
