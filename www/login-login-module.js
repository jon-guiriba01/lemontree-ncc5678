(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class='gradient-bg' padding >\n\t<div class=\"wrapper\">\n\n\t\t<div class=\"main-container\">\n\n\t\t\t<div class='logo-container'>\n\t\t\t\t<img class='logo' src=\"assets/imgs/app_logo.png\"/>\n\t\t\t</div>\n\t\t\t<div class='error-list'>\n\t\t\t\t<p *ngIf='hasLoginError' text-center><i>Invalid email / password</i></p>\n\t\t\t</div>\n\n\t\t\t<div class=\"login-inputs\">\n\t\t\t\t<input [(ngModel)]='email' name=\"email\" type=\"text\" placeholder='Username'/>\n\t\t\t\t<input [(ngModel)]='password' name=\"password\" type=\"password\" placeholder='Password'/>\n\t\t\t</div>\n\n\t\t\t<div class=\"login-btns\">\n\t\t\t\t<div class='login-signup'>\n\t\t\t\t\t<ion-button class='login-btn' (click)=\"login()\">LOGIN</ion-button>\n\t\t\t\t\t<a class='signup-btn' (click)=\"signup()\">SIGNUP</a>\n\t\t\t\t</div>\n\t\t\t\t<h4 class='google-login-btn' (click)=\"googleLogin()\">\n\t\t\t\t\t<ion-icon class='google-icon'  name=\"logo-googleplus\"></ion-icon> |\n\t\t\t\t\tcontinue with Google\n\t\t\t\t</h4>\n\t\t\t</div>\n\n\t\t\t<div class=\"ncc-logo\">\n\t\t\t\t<img class='logo' src=\"assets/imgs/ncc_logo.png\"/>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 800px;\n  min-width: 230px;\n  max-width: 900px; }\n\n@media (max-width: 599px) {\n    .main-container {\n      height: 100%; } }\n\n.login-inputs {\n  width: 100%; }\n\n.login-btns {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 50px; }\n\n@media (max-width: 599px) {\n    .login-btns {\n      margin-bottom: initial; } }\n\n.logo-container {\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center; }\n\n@media (max-width: 599px) {\n    .logo-container {\n      margin-bottom: 10px; } }\n\n.logo {\n  max-width: 350px;\n  max-height: 220px; }\n\n@media (max-width: 599px) {\n    .logo {\n      max-width: 250px;\n      max-height: 175px;\n      margin-bottom: 10px; } }\n\n@media (max-width: 599px) {\n  .ncc-logo .logo {\n    max-height: 160px;\n    max-width: 140px; } }\n\n.ncc-logo {\n  display: flex;\n  justify-content: center; }\n\ninput {\n  margin-bottom: 25px;\n  border: 3px solid var(--ion-color-secondary-tint);\n  border-radius: 4px;\n  width: 100%;\n  padding: 8px;\n  background: transparent; }\n\n::-webkit-input-placeholder {\n  color: #fff;\n  text-align: center; }\n\n:-ms-input-placeholder {\n  color: #fff;\n  text-align: center; }\n\n::-ms-input-placeholder {\n  color: #fff;\n  text-align: center; }\n\n::placeholder {\n  color: #fff;\n  text-align: center; }\n\n.login-signup {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px; }\n\n.login-btn {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  font-weight: bold; }\n\n.signup-btn {\n  text-align: center;\n  vertical-align: middle;\n  margin-top: 15px;\n  color: var(--ion-color-light);\n  font-weight: bold;\n  flex-grow: 1;\n  cursor: pointer; }\n\n.google-login-btn {\n  width: 100%;\n  color: var(--ion-color-light);\n  text-align: center;\n  cursor: pointer;\n  font-size: 25px; }\n\n@media (max-width: 599px) {\n    .google-login-btn {\n      font-size: 14px; } }\n\n.google-login-btn .google-icon {\n  vertical-align: middle;\n  font-size: 30px; }\n\n.error-list p {\n  color: var(--red); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxKb25cXFByb2plY3RzXFxETFNVLU5DQy01Njc4LWZyZWVsYW5jZS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxKb25cXFByb2plY3RzXFxETFNVLU5DQy01Njc4LWZyZWVsYW5jZS9zcmNcXGFwcFxcbW9iaWxlX21peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBRWI7RUFDQyxhQUFhO0VBQ1osc0JBQXNCO0VBQ3ZCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbEIsYUFBYTtFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUNSYjtJRENKO01BVUcsWUFBWSxFQUFBLEVBRWQ7O0FBRUQ7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUN2QmhCO0lEbUJKO01BUUUsc0JBQXNCLEVBQUEsRUFFdkI7O0FBRUQ7RUFDQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQ2xDcEI7SUQrQko7TUFPRSxtQkFBbUIsRUFBQSxFQUVwQjs7QUFFRDtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUM1Q2Q7SUQwQ0o7TUFNRSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLG1CQUFtQixFQUFBLEVBRXBCOztBQ3BERztFRHNESjtJQUdJLGlCQUFpQjtJQUNuQixnQkFBZ0IsRUFBQSxFQUVqQjs7QUFFRDtFQUNDLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFXeEI7RUFDQyxtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUd4QjtFQUNHLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFGckI7RUFDRyxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRnJCO0VBQ0csV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUZyQjtFQUNHLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHckI7RUFDQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDbEIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQ3JIWjtJRGdISjtNQVFFLGVBQWUsRUFBQSxFQUVoQjs7QUFFRDtFQUNDLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9tb2JpbGVfbWl4aW4nO1xyXG5cclxuLndyYXBwZXJ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4ubWFpbi1jb250YWluZXJ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogODAwcHg7XHJcblx0bWluLXdpZHRoOiAyMzBweDtcclxuXHRtYXgtd2lkdGg6IDkwMHB4O1xyXG5cdFxyXG5cdEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuICBcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcbn1cclxuXHJcbi5sb2dpbi1pbnB1dHN7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1idG5ze1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuXHJcblx0QGluY2x1ZGUgZm9yLXNpemUocGhvbmUtb25seSkge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogaW5pdGlhbDtcclxuXHR9XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhaW5lcntcclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuXHRAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmxvZ297XHJcblx0bWF4LXdpZHRoOiAzNTBweDtcclxuXHRtYXgtaGVpZ2h0OiAyMjBweDtcclxuXHJcblxyXG5cdEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuXHRcdG1heC13aWR0aDogMjUwcHg7XHJcblx0XHRtYXgtaGVpZ2h0OiAxNzVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcblxyXG4ubmNjLWxvZ28gLmxvZ297XHJcblxyXG5cdEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xyXG5cdFx0bWF4LXdpZHRoOiAxNDBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5uY2MtbG9nb3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVye1xyXG5cclxufVxyXG5cclxuaW5wdXRbbmFtZT0nZW1haWwnXXtcclxuXHJcbn1cclxuXHJcbmlucHV0e1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogOHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLXNpZ251cHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubG9naW4tYnRuIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRmbGV4LWdyb3c6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zaWdudXAtYnRue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ZmxleC1ncm93OiAxO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdvb2dsZS1sb2dpbi1idG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcblxyXG5cdEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcbn1cclxuXHJcbi5nb29nbGUtbG9naW4tYnRuIC5nb29nbGUtaWNvbntcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmVycm9yLWxpc3QgcHtcclxuXHRjb2xvcjogdmFyKC0tcmVkKTtcclxufSIsIkBtaXhpbiBmb3Itc2l6ZSgkcmFuZ2UpIHtcclxuICAkcGhvbmUtdXBwZXItYm91bmRhcnk6IDYwMHB4O1xyXG4gICR0YWJsZXQtcG9ydHJhaXQtdXBwZXItYm91bmRhcnk6IDkwMHB4O1xyXG4gICR0YWJsZXQtbGFuZHNjYXBlLXVwcGVyLWJvdW5kYXJ5OiAxMjAwcHg7XHJcbiAgJGRlc2t0b3AtdXBwZXItYm91bmRhcnk6IDE4MDBweDtcclxuXHJcbiAgQGlmICRyYW5nZSA9PSBwaG9uZS1vbmx5IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRwaG9uZS11cHBlci1ib3VuZGFyeSAtIDF9KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gdGFibGV0LXBvcnRyYWl0LXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkcGhvbmUtdXBwZXItYm91bmRhcnkpIHsgQGNvbnRlbnQ7IH1cclxuICB9IEBlbHNlIGlmICRyYW5nZSA9PSB0YWJsZXQtbGFuZHNjYXBlLXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0LXBvcnRyYWl0LXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldC1sYW5kc2NhcGUtdXBwZXItYm91bmRhcnkpIHsgQGNvbnRlbnQ7IH1cclxuICB9IEBlbHNlIGlmICRyYW5nZSA9PSBiaWctZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGRlc2t0b3AtdXBwZXItYm91bmRhcnkpIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(router, loadingController, googlePlus, sotrage, afAuth, platform, authService, afs) {
        this.router = router;
        this.loadingController = loadingController;
        this.googlePlus = googlePlus;
        this.sotrage = sotrage;
        this.afAuth = afAuth;
        this.platform = platform;
        this.authService = authService;
        this.afs = afs;
        this.hasLoginError = false;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.signup = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (res) {
            console.log("-login()", res);
            // this.authService.
            var userCollection = _this.afs.collection('users', function (ref) { return ref.where('email', '==', _this.email); });
            userCollection.snapshotChanges().subscribe(function (dataSet) {
                if (dataSet) {
                    var user = __assign({}, dataSet[0].payload.doc.data());
                    user['id'] = dataSet[0].payload.doc.id;
                    js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.set('user', user);
                    _this.authService.user = user;
                    _this.router.navigateByUrl('/home');
                }
            });
        }).catch(function (res) {
            _this.hasLoginError = true;
            console.log(res);
        });
    };
    LoginPage.prototype.googleLogin = function () {
        this.authService.googleLogin().then(function (res) {
        });
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__["GooglePlus"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map