(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            exports: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-toolbar\">\n\t<!-- <ion-button (click)='btnMenuClickEvent()'>\n\t  <ion-icon name=\"menu\"></ion-icon>\n\t</ion-button> -->\n\t<ion-searchbar\n\t animated \n\t (ionChange)='onChangeSearch($event)'></ion-searchbar>\n</div>\n"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-toolbar {\n  display: flex;\n  justify-content: center; }\n\n.app-toolbar > ion-button {\n  flex-basis: 10%;\n  max-width: 50px; }\n\n.app-toolbar > ion-searchbar {\n  flex-basis: 80%; }\n\n@media (max-width: 599px) {\n  ion-searchbar input {\n    font-size: 12px; } }\n\nion-button {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-dark); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL0M6XFxVc2Vyc1xcSm9uXFxQcm9qZWN0c1xcRExTVS1OQ0MtNTY3OC1mcmVlbGFuY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRvb2xiYXJcXHRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbGJhci9DOlxcVXNlcnNcXEpvblxcUHJvamVjdHNcXERMU1UtTkNDLTU2NzgtZnJlZWxhbmNlL3NyY1xcYXBwXFxtb2JpbGVfbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHeEI7RUFDQyxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdoQjtFQUNDLGVBQWUsRUFBQTs7QUNOWjtFRFNKO0lBRUUsZUFBZSxFQUFBLEVBRWhCOztBQUdEO0VBQ0Msb0NBQWE7RUFDYiw4QkFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9tb2JpbGVfbWl4aW4nO1xyXG5cclxuLmFwcC10b29sYmFye1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcHAtdG9vbGJhcj5pb24tYnV0dG9ue1xyXG5cdGZsZXgtYmFzaXM6IDEwJTtcclxuXHRtYXgtd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5hcHAtdG9vbGJhcj5pb24tc2VhcmNoYmFye1xyXG5cdGZsZXgtYmFzaXM6IDgwJTtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciBpbnB1dHtcclxuXHRAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbntcclxuXHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59IiwiQG1peGluIGZvci1zaXplKCRyYW5nZSkge1xyXG4gICRwaG9uZS11cHBlci1ib3VuZGFyeTogNjAwcHg7XHJcbiAgJHRhYmxldC1wb3J0cmFpdC11cHBlci1ib3VuZGFyeTogOTAwcHg7XHJcbiAgJHRhYmxldC1sYW5kc2NhcGUtdXBwZXItYm91bmRhcnk6IDEyMDBweDtcclxuICAkZGVza3RvcC11cHBlci1ib3VuZGFyeTogMTgwMHB4O1xyXG5cclxuICBAaWYgJHJhbmdlID09IHBob25lLW9ubHkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHBob25lLXVwcGVyLWJvdW5kYXJ5IC0gMX0pIHsgQGNvbnRlbnQ7IH1cclxuICB9IEBlbHNlIGlmICRyYW5nZSA9PSB0YWJsZXQtcG9ydHJhaXQtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRwaG9uZS11cHBlci1ib3VuZGFyeSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IHRhYmxldC1sYW5kc2NhcGUtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQtcG9ydHJhaXQtdXBwZXItYm91bmRhcnkpIHsgQGNvbnRlbnQ7IH1cclxuICB9IEBlbHNlIGlmICRyYW5nZSA9PSBkZXNrdG9wLXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0LWxhbmRzY2FwZS11cHBlci1ib3VuZGFyeSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IGJpZy1kZXNrdG9wLXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkZGVza3RvcC11cHBlci1ib3VuZGFyeSkgeyBAY29udGVudDsgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(events, searchService) {
        this.events = events;
        this.searchService = searchService;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.btnMenuClickEvent = function () {
        this.events.publish("btnclick:menu", true);
    };
    ToolbarComponent.prototype.onChangeSearch = function (evt) {
        var _this = this;
        console.log(1, evt);
        if (this.timeout)
            clearTimeout(this.timeout);
        setTimeout(function () {
            _this.searchService.searchInput = evt.detail.value;
        }, 500);
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _home_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.router.module */ "./src/app/home/home.router.module.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__["NgCalendarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ]),
                _home_router_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"],
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n    \t<app-toolbar></app-toolbar> \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding id=\"main\">\n\n\t<ion-tabs>\n\t  <ion-tab-bar slot=\"bottom\">\n\t    <ion-tab-button tab=\"dashboard\">\n\t      <ion-icon name=\"home\"></ion-icon>\n\t    </ion-tab-button>\n\n\t    <ion-tab-button tab=\"task\">\n\t      <ion-icon name=\"clipboard\"></ion-icon>\n\t    </ion-tab-button>\n\n\t    <ion-tab-button tab=\"file-cabinet\">\n\t      <ion-icon name=\"filing\"></ion-icon>\n\t    </ion-tab-button>\n\t    \n\t    <ion-tab-button tab=\"calendar\">\n\t      <ion-icon name=\"calendar\"></ion-icon>\n\t    </ion-tab-button>\n\n\t  </ion-tab-bar>\n\t</ion-tabs>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-avatar {\n  margin: auto; }\n\nion-toolbar {\n  --background: var(--ion-color-primary); }\n\nion-tab-bar {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-light); }\n\nion-tab-button.tab-selected {\n  color: var(--ion-color-secondary);\n  --color-selected: var(--ion-color-secondary); }\n\nion-tab-button {\n  --color-selected: var(--ion-color-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEpvblxcUHJvamVjdHNcXERMU1UtTkNDLTU2NzgtZnJlZWxhbmNlL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVksRUFBQTs7QUFHYjtFQUNDLHNDQUFhLEVBQUE7O0FBR2Q7RUFDQyxzQ0FBYTtFQUNiLCtCQUFRLEVBQUE7O0FBR1Q7RUFDQyxpQ0FBaUM7RUFDakMsNENBQWlCLEVBQUE7O0FBRWxCO0VBQ0Msd0NBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLWF2YXRhcntcblx0bWFyZ2luOiBhdXRvO1xufVxuXG5pb24tdG9vbGJhcntcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi10YWItYmFye1xuXHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVke1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLXRhYi1idXR0b257XG5cdC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var HomePage = /** @class */ (function () {
    function HomePage(menu, events, router, searchService) {
        this.menu = menu;
        this.events = events;
        this.router = router;
        this.searchService = searchService;
        this.initMenu();
    }
    HomePage.prototype.initMenu = function () {
        var _this = this;
        this.menu.enable(true, 'main');
        this.events.subscribe('btnclick:menu', function (isEnabled) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("clicked btn menu");
                this.menu.toggle('main');
                return [2 /*return*/];
            });
        }); });
    };
    HomePage.prototype.openSidebar = function () {
    };
    HomePage.prototype.logout = function () {
        console.log("loguot");
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('user', null);
        this.router.navigateByUrl('/login');
    };
    HomePage.prototype.navTo = function (page) {
        this.router.navigateByUrl(page);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/home/home.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/home.router.module.ts ***!
  \********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"],
        children: [
            {
                path: 'calendar',
                children: [
                    {
                        path: '',
                        loadChildren: '../calendar/calendar.module#CalendarPageModule'
                    }
                ]
            },
            {
                path: 'file-cabinet',
                children: [
                    {
                        path: '',
                        loadChildren: '../file-cabinet/file-cabinet.module#FileCabinetPageModule'
                    }
                ]
            },
            {
                path: 'task',
                children: [
                    {
                        path: '',
                        loadChildren: '../task/task.module#TaskPageModule'
                    }
                ]
            },
            {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/calendar',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/calendar',
        pathMatch: 'full'
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map