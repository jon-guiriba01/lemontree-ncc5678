var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
var UtilService = /** @class */ (function () {
    function UtilService(storage) {
        this.storage = storage;
    }
    UtilService.prototype.getTaskId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('uq-task-id').then(function (res) {
                res += 1;
                _this.storage.set('uq-task-id', res);
                resolve(res);
            });
        });
    };
    UtilService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Storage])
    ], UtilService);
    return UtilService;
}());
export { UtilService };
//# sourceMappingURL=util.service.js.map