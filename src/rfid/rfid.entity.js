'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.rfidtbl = void 0;
var typeorm_1 = require('typeorm');
var rfidtbl = /** @class */ (function () {
  function rfidtbl() {}
  __decorate(
    [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')],
    rfidtbl.prototype,
    'Card_ID',
  );
  __decorate(
    [(0, typeorm_1.Column)({ length: 50 })],
    rfidtbl.prototype,
    'Device_Type',
  );
  __decorate(
    [(0, typeorm_1.Column)({ length: 50 })],
    rfidtbl.prototype,
    'Physical_ID',
  );
  __decorate([(0, typeorm_1.Column)()], rfidtbl.prototype, 'User_ID');
  __decorate([(0, typeorm_1.Column)()], rfidtbl.prototype, 'Issue_Date');
  __decorate([(0, typeorm_1.Column)()], rfidtbl.prototype, 'Expire_Date');
  __decorate([(0, typeorm_1.Column)()], rfidtbl.prototype, 'Balance');
  __decorate([(0, typeorm_1.Column)()], rfidtbl.prototype, 'status');
  rfidtbl = __decorate([(0, typeorm_1.Entity)()], rfidtbl);
  return rfidtbl;
})();
exports.rfidtbl = rfidtbl;
