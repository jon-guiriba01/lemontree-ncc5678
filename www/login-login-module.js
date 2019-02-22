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

module.exports = "<ion-content class='gradient-bg' padding >\n\t<div class=\"wrapper\">\n\n\t\t<div class=\"main-container\">\n\n\t\t\t<div class='logo-container'>\n\t\t\t\t<img class='logo' src=\"assets/imgs/app_logo.png\"/>\n\t\t\t</div>\n\t\t\t<div class=\"login-inputs\">\n\t\t\t\t<input [(ngModel)]='email' name=\"email\" type=\"text\" placeholder='Username'/>\n\t\t\t\t<input [(ngModel)]='password' name=\"password\" type=\"password\" placeholder='Password'/>\n\t\t\t</div>\n\n\t\t\t<div class=\"login-btns\">\n\t\t\t\t<div class='login-signup'>\n\t\t\t\t\t<ion-button class='login-btn' (click)=\"login()\">LOGIN</ion-button>\n\t\t\t\t\t<a class='signup-btn' (click)=\"signup()\">SIGNUP</a>\n\t\t\t\t</div>\n\t\t\t\t<h4 class='google-login-btn' (click)=\"googleLogin()\">\n\t\t\t\t\t<ion-icon class='google-icon'  name=\"logo-googleplus\"></ion-icon> |\n\t\t\t\t\tcontinue with Google\n\t\t\t\t</h4>\n\t\t\t</div>\n\n\t\t\t<div class=\"ncc-logo\">\n\t\t\t\t<img class='logo' src=\"assets/imgs/ncc_logo.png\"/>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 800px;\n  min-width: 230px;\n  max-width: 900px; }\n\n.login-inputs {\n  width: 100%; }\n\n.login-btns {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 50px; }\n\n.logo-container {\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center; }\n\n.logo {\n  max-width: 350px;\n  max-height: 220px; }\n\n.ncc-logo {\n  display: flex;\n  justify-content: center; }\n\ninput {\n  margin-bottom: 25px;\n  border: 3px solid var(--ion-color-secondary-tint);\n  border-radius: 4px;\n  width: 100%;\n  padding: 8px;\n  background: transparent; }\n\n::-webkit-input-placeholder {\n  color: #fff;\n  text-align: center; }\n\n:-ms-input-placeholder {\n  color: #fff;\n  text-align: center; }\n\n::-ms-input-placeholder {\n  color: #fff;\n  text-align: center; }\n\n::placeholder {\n  color: #fff;\n  text-align: center; }\n\n.login-signup {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px; }\n\n.login-btn {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  font-weight: bold; }\n\n.signup-btn {\n  text-align: center;\n  vertical-align: middle;\n  margin-top: 15px;\n  color: var(--ion-color-light);\n  font-weight: bold;\n  flex-grow: 1; }\n\n.google-login-btn {\n  width: 100%;\n  color: var(--ion-color-light);\n  text-align: center;\n  cursor: pointer;\n  font-size: 25px; }\n\n.google-login-btn .google-icon {\n  vertical-align: middle;\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxKb25cXFByb2plY3RzXFxETFNVLU5DQy01Njc4LWZyZWVsYW5jZS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFFYjtFQUNDLGFBQWE7RUFDWixzQkFBc0I7RUFDdkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNsQixhQUFhO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLFdBQVcsRUFBQTs7QUFHWjtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBR3hCO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFXeEI7RUFDQyxtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUd4QjtFQUNHLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFGckI7RUFDRyxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRnJCO0VBQ0csV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUZyQjtFQUNHLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHckI7RUFDQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDbEIsWUFBWSxFQUFBOztBQUdiO0VBQ0MsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxzQkFBc0I7RUFDdEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4ubWFpbi1jb250YWluZXJ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogODAwcHg7XHJcblx0bWluLXdpZHRoOiAyMzBweDtcclxuXHRtYXgtd2lkdGg6IDkwMHB4O1xyXG59XHJcblxyXG4ubG9naW4taW5wdXRze1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tYnRuc3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVye1xyXG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ297XHJcblx0bWF4LXdpZHRoOiAzNTBweDtcclxuXHRtYXgtaGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuLm5jYy1sb2dve1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXJ7XHJcblxyXG59XHJcblxyXG5pbnB1dFtuYW1lPSdlbWFpbCdde1xyXG5cclxufVxyXG5cclxuaW5wdXR7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHRib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiA4cHg7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tc2lnbnVwe1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGZsZXgtZ3JvdzogMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNpZ251cC1idG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHRmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5nb29nbGUtbG9naW4tYnRue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uZ29vZ2xlLWxvZ2luLWJ0biAuZ29vZ2xlLWljb257XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcbn1cclxuIl19 */"

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
    function LoginPage(router, loadingController, googlePlus, sotrage, afAuth, platform, authService) {
        this.router = router;
        this.loadingController = loadingController;
        this.googlePlus = googlePlus;
        this.sotrage = sotrage;
        this.afAuth = afAuth;
        this.platform = platform;
        this.authService = authService;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.signup = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/home');
        }).catch(function (res) {
            console.log(res);
        });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.authService.googleLogin().then(function (res) {
            _this.router.navigateByUrl('/home');
            console.log(res);
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
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map