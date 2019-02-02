(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-task-module"],{

/***/ "./src/app/task/task.module.ts":
/*!*************************************!*\
  !*** ./src/app/task/task.module.ts ***!
  \*************************************/
/*! exports provided: TaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageModule", function() { return TaskPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.page */ "./src/app/task/task.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _task_page__WEBPACK_IMPORTED_MODULE_5__["TaskPage"]
    }
];
var TaskPageModule = /** @class */ (function () {
    function TaskPageModule() {
    }
    TaskPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_task_page__WEBPACK_IMPORTED_MODULE_5__["TaskPage"]]
        })
    ], TaskPageModule);
    return TaskPageModule;
}());



/***/ }),

/***/ "./src/app/task/task.page.html":
/*!*************************************!*\
  !*** ./src/app/task/task.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding style=\"padding-top: 30px;\">\n\t<ion-tabs>\n\t  <ion-tab-bar slot=\"top\">\n\t    <ion-button  (click)=\"switchTab('marketing')\">\n\t      <ion-label>Marketing</ion-label>\n\t    </ion-button>\n\n\t    <ion-button (click)=\"switchTab('registration')\">\n\t      <ion-label>Registration</ion-label>\n\t    </ion-button>\n\n\t    <ion-button (click)=\"switchTab('operation')\">\n\t      <ion-label>Operation</ion-label>\n\t    </ion-button>\n\n\t    <ion-button (click)=\"switchTab('finance')\">\n\t      <ion-label>Finance</ion-label>\n\t    </ion-button>\n\n\t    <ion-button (click)=\"switchTab('events')\">\n\t      <ion-label>Events</ion-label>\n\t    </ion-button>\n\t  </ion-tab-bar>\n\t</ion-tabs>\n\n\t<div class=\"main-container\">\n\t\t<div id=\"do\">\n\t\t\t<ion-label>Do</ion-label>\n\t\t</div>\n\t\t<div id=\"doing\">\n\t\t\t<ion-label>Doing</ion-label>\n\t\t</div>\n\t\t<div id=\"done\">\n\t\t\t<ion-label>Done</ion-label>\n\t\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/task/task.page.scss":
/*!*************************************!*\
  !*** ./src/app/task/task.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  padding-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9DOlxcVXNlcnNcXEpvblxcUHJvamVjdHNcXGZyZWVsYW5jZS0xL3NyY1xcYXBwXFx0YXNrXFx0YXNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuXHRwYWRkaW5nLXRvcDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/task/task.page.ts":
/*!***********************************!*\
  !*** ./src/app/task/task.page.ts ***!
  \***********************************/
/*! exports provided: TaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPage", function() { return TaskPage; });
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

var TaskPage = /** @class */ (function () {
    function TaskPage() {
    }
    TaskPage.prototype.ngOnInit = function () {
    };
    TaskPage.prototype.switchTab = function (tab) {
        switch (tab) {
            case "marketing":
                break;
            default:
                break;
        }
        console.log("switched to", tab);
    };
    TaskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.page.html */ "./src/app/task/task.page.html"),
            styles: [__webpack_require__(/*! ./task.page.scss */ "./src/app/task/task.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskPage);
    return TaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=task-task-module.js.map