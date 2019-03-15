(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class='gradient-bg'>\n\t<div class='main-container'>\t\n\t\t<ion-card padding class='form-card'>\n\t\t\t<ion-icon class='back-btn' name='arrow-back' (click)='navTo(\"/login\")'></ion-icon>\n\n\t\t\t<form [formGroup]=\"loginForm\">\n\t\t\t\t<ion-card-header class='form-card-header'>\n\t\t<!-- \t\t\t<div class='title-container'>\n\t\t\t\t\t\t<h6 class='form-card-title'>Sign Up</h6>\n\t\t\t\t\t</div> -->\n\t\t\t\t</ion-card-header>\n\t\t\t\t<ion-grid>\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size='6'>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t  <ion-label position='floating' class='input-label'>First Name</ion-label>\n\t\t\t\t\t\t\t  <ion-input type='text' formControlName='firstName' ></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.firstName\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"loginForm.get('firstName').hasError(validation.type) && (loginForm.get('firstName').dirty || loginForm.get('firstName').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size='6'>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t  <ion-label position='floating' class='input-label'>Last Name</ion-label>\n\t\t\t\t\t\t\t  <ion-input type='text' formControlName='lastName' ></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.lastName\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"loginForm.get('lastName').hasError(validation.type) && (loginForm.get('lastName').dirty || loginForm.get('lastName').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t  <ion-label position='floating' class='input-label'>Email</ion-label>\n\t\t\t\t\t\t\t  <ion-input type='email' formControlName='email' ></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\n\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.email\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t  <ion-label position='floating' class='input-label'>Birthdate</ion-label>\n\t\t\t\t\t\t\t  <ion-datetime class='datetime-input' display-format=\"MMM DD, YYYY\" formControlName='birthdate'></ion-datetime>\n\t\t\t\t\t\t\t</ion-item>\n\n\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.birthdate\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"loginForm.get('birthdate').hasError(validation.type) && (loginForm.get('birthdate').dirty || loginForm.get('birthdate').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t  <ion-label position='floating' class='input-label'>Contact Number</ion-label>\n\t\t\t\t\t\t\t  <ion-input maxlength='11' minlength='11' type='number' formControlName='contactNumber' ></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\n\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.contactNumber\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"loginForm.get('contactNumber').hasError(validation.type) && (loginForm.get('contactNumber').dirty || loginForm.get('contactNumber').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col>\n\t\n\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t  <ion-label position='floating' class='input-label'>Password</ion-label>\n\t\t\t\t\t\t\t  <ion-input type='password' formControlName='password' ></ion-input>\n\t\t\t\t\t\t\t</ion-item>\n\n\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.password\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\n\n\t\t\t\t<ion-row>\n\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t  <ion-label position='floating' class='input-label'>Repeat Password</ion-label>\n\t\t\t\t\t\t  <ion-input type='password' formControlName='repassword'  ></ion-input>\n\t\t\t\t\t\t</ion-item>\n\n\n\t\t        <div class=\"error-list\" >\n\t\t        \t<div *ngFor=\"let validation of validationMessages.repassword\" >\n\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"loginForm.get('repassword').hasError(validation.type) && (loginForm.get('repassword').dirty || loginForm.get('repassword').touched)\" >\n\t\t\t        \t\t{{validation.message}}\n\t\t\t        \t</h5>\n\t\t        \t</div>\n\t\t        </div>\n\t\t\t\t\t</ion-col>\n\n\t\t\t\t</ion-row>\n\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t  <ion-label position='floating' class='input-label'>Team</ion-label>    \n\n\t\t\t\t\t\t  <ion-select formControlName='team' okText=\"Okay\" cancelText=\"Dismiss\">\n\t\t\t\t\t\t\t\t<ion-select-option value=\"admin\">Administration</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"registration\">Registration</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"operations\">Operations</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"marketing\">Marketing</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"camps\">Camps & Competitions</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\n\t\t\t\t\t\t</ion-item>\n\n\n\t\t        <div class=\"error-list\" >\n\t\t        \t<div *ngFor=\"let validation of validationMessages.contactNumber\" >\n\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"loginForm.get('contactNumber').hasError(validation.type) && (loginForm.get('contactNumber').dirty || loginForm.get('contactNumber').touched)\" >\n\t\t\t        \t\t{{validation.message}}\n\t\t\t        \t</h5>\n\t\t        \t</div>\n\t\t        </div>\n\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t</ion-grid>\n\n\t\n\t\t\t\t<div class='action-row'>\n\t\t\t\t\t<ion-button type=\"submit\" class='signup-btn' (click)=\"signup()\" \n\n\t\t\t\t\t>\n\t\t\t\t\t\tSIGNUP\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</ion-card>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: var(--ion-color-primary); }\n\n.signup-btn {\n  --background: var(--ion-color-primary); }\n\nion-content {\n  /*\t--background: var(--ion-color-dark);\r\n\tbackground: var(--ion-color-dark);*/ }\n\nion-item, ion-list {\n  --background: transparent;\n  background: transparent;\n  --color: var(--ion-color-dark);\n  color: var(--ion-color-dark); }\n\n.action-row {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 60px; }\n\nion-content ion-label {\n  /*--color: var(--yellow);*/ }\n\nion-input {\n  --padding-start: 12px !important; }\n\n.form-card {\n  --background: var(--dark-bg);\n  --color: var(--ion-color-light);\n  position: relative; }\n\n.form-card-header {\n  background: none;\n  padding: 0; }\n\n.logo-container {\n  margin-bottom: 50px;\n  display: flex; }\n\n.logo {\n  max-width: 220px;\n  max-height: 120px; }\n\n.back-btn {\n  width: 38px;\n  height: 32px;\n  cursor: pointer;\n  margin-top: 8px;\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: 0; }\n\n.error-msg {\n  font-size: 12px;\n  margin-top: 5px;\n  padding-left: 15px; }\n\n.title-container {\n  display: block;\n  text-align: center; }\n\n.input-label {\n  --color: var(--ion-color-light); }\n\nion-input {\n  --color: var(--ion-color-light);\n  /*--background: var(--ion-color-light);*/ }\n\n.datetime-input {\n  --color: var(--ion-color-light); }\n\nion-item {\n  --color: var(--ion-color-light) !important;\n  color: var(--ion-color-light) !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcSm9uXFxQcm9qZWN0c1xcRExTVS1OQ0MtNTY3OC1mcmVlbGFuY2Uvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQ0FBYSxFQUFBOztBQUdkO0VBQ0Msc0NBQWEsRUFBQTs7QUFJZDtFQUNBO29DQ0ZvQyxFREdDOztBQUdyQztFQUNDLHlCQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUFRO0VBQ1IsNEJBQTRCLEVBQUE7O0FBSTdCO0VBQ0MsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQywwQkFBQSxFQUEyQjs7QUFHNUI7RUFDQyxnQ0FBZ0IsRUFBQTs7QUFHakI7RUFDQyw0QkFBYTtFQUNiLCtCQUFRO0VBQ1Isa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsZ0JBQWdCO0VBQ2hCLFVBQVcsRUFBQTs7QUFNWjtFQUNDLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBSWQ7RUFDQyxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBSWxCO0VBQ0MsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1gsTUFBTTtFQUNOLE9BQU8sRUFBQTs7QUFHVDtFQUNDLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLCtCQUFRLEVBQUE7O0FBR1Q7RUFDQywrQkFBUTtFQUNSLHdDQUFBLEVBQXlDOztBQUcxQztFQUNDLCtCQUFRLEVBQUE7O0FBSVQ7RUFDQywwQ0FBUTtFQUNQLHdDQUF3QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuXHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLnNpZ251cC1idG57XHJcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblxyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuLypcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsqL1xyXG59XHJcblxyXG5pb24taXRlbSwgaW9uLWxpc3R7XHJcblx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHQtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuXHJcbi5hY3Rpb24tcm93e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCBpb24tbGFiZWx7XHJcblx0LyotLWNvbG9yOiB2YXIoLS15ZWxsb3cpOyovXHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuXHQtLXBhZGRpbmctc3RhcnQ6IDEycHggIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5mb3JtLWNhcmR7XHJcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcclxuXHQtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tY2FyZC1oZWFkZXJ7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRwYWRkaW5nOiAgMDtcclxufVxyXG4uZm9ybS1jYXJkLXRpdGxle1xyXG59XHJcblxyXG5cclxuLmxvZ28tY29udGFpbmVye1xyXG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbi5sb2dve1xyXG5cdG1heC13aWR0aDogMjIwcHg7XHJcblx0bWF4LWhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcblxyXG4uYmFjay1idG57XHJcblx0d2lkdGg6IDM4cHg7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXJnaW4tdG9wOiA4cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IDk5OTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmVycm9yLW1zZ3tcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lcntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1sYWJlbHtcclxuXHQtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG5pb24taW5wdXR7XHJcblx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHQvKi0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsqL1xyXG59XHJcblxyXG4uZGF0ZXRpbWUtaW5wdXR7XHJcblx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHRcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcblx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XHJcblxyXG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgfVxuXG4uc2lnbnVwLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyB9XG5cbmlvbi1jb250ZW50IHtcbiAgLypcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsqLyB9XG5cbmlvbi1pdGVtLCBpb24tbGlzdCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7IH1cblxuLmFjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiA2MHB4OyB9XG5cbmlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gIC8qLS1jb2xvcjogdmFyKC0teWVsbG93KTsqLyB9XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweCAhaW1wb3J0YW50OyB9XG5cbi5mb3JtLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWRhcmstYmcpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmZvcm0tY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwOyB9XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLmxvZ28ge1xuICBtYXgtd2lkdGg6IDIyMHB4O1xuICBtYXgtaGVpZ2h0OiAxMjBweDsgfVxuXG4uYmFjay1idG4ge1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDsgfVxuXG4uZXJyb3ItbXNnIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDsgfVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uaW5wdXQtbGFiZWwge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyB9XG5cbmlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC8qLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyovIH1cblxuLmRhdGV0aW1lLWlucHV0IHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsgfVxuXG5pb24taXRlbSB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(afAuth, router, formBuilder, afs, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.afs = afs;
        this.authService = authService;
        this.validationMessages = {
            'firstName': [
                { type: 'required', message: 'first name is required.' },
                { type: 'minlength', message: 'first name must be at least 2 characters long.' },
                { type: 'maxlength', message: 'first name cannot be more than 30 characters long.' },
            ],
            'lastName': [
                { type: 'required', message: 'last name is required.' },
                { type: 'minlength', message: 'last name must be at least 2 characters long.' },
                { type: 'maxlength', message: 'last name cannot be more than 30 characters long.' },
            ],
            'birthdate': [
                { type: 'required', message: 'birthdate is required.' },
            ],
            'contactNumber': [
                { type: 'required', message: 'contact number is required.' },
                { type: 'minlength', message: 'contact number should be 11 characters long.' },
            ],
            'team': [
                { type: 'required', message: 'team is required.' },
            ],
            'email': [
                { type: 'required', message: 'email is required.' },
                { type: 'email', message: 'must be a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'password is required.' },
                { type: 'pattern', message: 'password must contain 1 upper case and 1 number.' },
                { type: 'minlength', message: 'password must be at least 8 characters.' }
            ],
            'repassword': [
                { type: 'equalTo', message: 'password doesnt match.' },
            ],
        };
        // A letter, a number, an uppercase, min of 8
        this.passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$';
        // email regex
        this.emailRegex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
        this.loginForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            team: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.passwordRegex)
            ])),
            repassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                this.equalto('password')
            ])
        });
    }
    SignupPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        console.log('-signup', this.loginForm.get('firstName'));
        this.afAuth.auth.createUserWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value).then(function (res) {
            console.log('-createUserWithEmailAndPassword', res);
            console.log('-loginForm', {
                firstName: _this.loginForm.get('firstName').value,
                lastName: _this.loginForm.get('lastName').value,
                email: _this.loginForm.get('email').value,
                contactNumber: _this.loginForm.get('contactNumber').value,
                birthdate: _this.loginForm.get('birthdate').value,
                team: _this.loginForm.get('team').value
            });
            var userCollection = _this.afs.collection('users');
            var user = {
                first_name: _this.loginForm.get('firstName').value,
                last_name: _this.loginForm.get('lastName').value,
                email: _this.loginForm.get('email').value,
                contact_number: _this.loginForm.get('contactNumber').value,
                birthdate: _this.loginForm.get('birthdate').value,
                team: _this.loginForm.get('team').value
            };
            userCollection.add(user).then(function (uploadAddToFirestoreFinished) {
                _this.authService.user = user;
                _this.router.navigateByUrl('/home');
                // this.loading.dismiss()
            }).catch(function (err) {
                console.log("err", err);
            });
        }).catch(function (res) {
            console.log(res);
        });
    };
    SignupPage.prototype.navTo = function (route) {
        this.router.navigateByUrl(route);
    };
    SignupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map