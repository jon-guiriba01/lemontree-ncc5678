(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-cabinet-file-cabinet-module"],{

/***/ "./src/app/file-cabinet/file-cabinet.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/file-cabinet/file-cabinet.module.ts ***!
  \*****************************************************/
/*! exports provided: FileCabinetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCabinetPageModule", function() { return FileCabinetPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _file_cabinet_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-cabinet.page */ "./src/app/file-cabinet/file-cabinet.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _file_cabinet_page__WEBPACK_IMPORTED_MODULE_5__["FileCabinetPage"]
    }
];
var FileCabinetPageModule = /** @class */ (function () {
    function FileCabinetPageModule() {
    }
    FileCabinetPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_file_cabinet_page__WEBPACK_IMPORTED_MODULE_5__["FileCabinetPage"]]
        })
    ], FileCabinetPageModule);
    return FileCabinetPageModule;
}());



/***/ }),

/***/ "./src/app/file-cabinet/file-cabinet.page.html":
/*!*****************************************************!*\
  !*** ./src/app/file-cabinet/file-cabinet.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\t<ion-list>\n\t  <ion-item *ngFor=\"let file of files\">\n\t    <ion-label>{{file.name}}</ion-label>\n\t  </ion-item>\n\t</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/file-cabinet/file-cabinet.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/file-cabinet/file-cabinet.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtY2FiaW5ldC9maWxlLWNhYmluZXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/file-cabinet/file-cabinet.page.ts":
/*!***************************************************!*\
  !*** ./src/app/file-cabinet/file-cabinet.page.ts ***!
  \***************************************************/
/*! exports provided: FileCabinetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCabinetPage", function() { return FileCabinetPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileCabinetPage = /** @class */ (function () {
    function FileCabinetPage() {
        this.files = [
            {
                name: "The Quick.txt"
            },
            {
                name: "Brown.png"
            },
            {
                name: "Fox jumps.jpg"
            },
            {
                name: "Over.mp4"
            },
            {
                name: "The Lazy Dog.mob"
            },
        ];
    }
    FileCabinetPage.prototype.ngOnInit = function () {
    };
    FileCabinetPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-cabinet',
            template: __webpack_require__(/*! ./file-cabinet.page.html */ "./src/app/file-cabinet/file-cabinet.page.html"),
            styles: [__webpack_require__(/*! ./file-cabinet.page.scss */ "./src/app/file-cabinet/file-cabinet.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FileCabinetPage);
    return FileCabinetPage;
}());



/***/ })

}]);
//# sourceMappingURL=file-cabinet-file-cabinet-module.js.map