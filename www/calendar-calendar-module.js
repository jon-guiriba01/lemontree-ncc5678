(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar.page */ "./src/app/calendar/calendar.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_5__["CalendarPage"]
    }
];
var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["NgCalendarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_5__["CalendarPage"]]
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.page.html":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n    <calendar [eventSource]=\"eventSource\"\n    [calendarMode]=\"calendar.mode\"\n    [currentDate]=\"calendar.currentDate\"\n    (onCurrentDateChanged)=\"onCurrentDateChanged($event)\"\n    (onRangeChanged)=\"reloadSource(startTime, endTime)\"\n    (onEventSelected)=\"onEventSelected($event)\"\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\n    (onTimeSelected)=\"onTimeSelected($event)\"\n    step=\"30\">\n  </calendar>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/calendar/calendar.page.scss":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/calendar/calendar.page.ts":
/*!*******************************************!*\
  !*** ./src/app/calendar/calendar.page.ts ***!
  \*******************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
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

var CalendarPage = /** @class */ (function () {
    function CalendarPage() {
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.eventSource = null;
        this.startTime = null;
        this.endTime = null;
    }
    CalendarPage.prototype.ngOnInit = function () {
    };
    CalendarPage.prototype.onCurrentDateChanged = function (event) {
    };
    CalendarPage.prototype.onEventSelected = function (event) {
    };
    CalendarPage.prototype.onViewTitleChanged = function (event) {
    };
    CalendarPage.prototype.onTimeSelected = function (event) {
    };
    CalendarPage.prototype.reloadSource = function (startTime, endTime) {
    };
    CalendarPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.page.html */ "./src/app/calendar/calendar.page.html"),
            styles: [__webpack_require__(/*! ./calendar.page.scss */ "./src/app/calendar/calendar.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarPage);
    return CalendarPage;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map