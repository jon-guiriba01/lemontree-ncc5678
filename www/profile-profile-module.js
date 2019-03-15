(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons >\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<div class='main-container'>\n\t\t<form [formGroup]=\"settingsForm\">\n\t\t\t<div class='head-container'>\n\t\t\t\t<ion-grid>\n  \t\t\t  <ion-row >\n  \t\t\t  \t<div class='avatar-team-wrapper'>\n\t  \t\t\t    <ion-col class='avatar-col'>\n\t  \t\t\t    \t<div class='avatar-container'>\n\t  \t\t\t    \t\t<img class='avatar' [(src)]='authService.user.profileImageUrl'/>\n\t  \t\t\t    \t\t<h5 class='edit-avatar-btn' (click)='changeAvatar()'>EDIT</h5>\n\t  \t\t\t    \t</div>\n\t  \t\t\t    </ion-col>\n\t  \t\t\t    <ion-col size='8'>\n\t\t\t\t\t\t\t<h5 class='myprofile-text'>My Profile</h5>\n\n\t\t\t\t      <ion-item lines='none'>\n\t\t\t\t        <ion-label position='floating'>Team</ion-label>\n\t\t\t\t        <!-- <ion-input class='team-input' type='text' formControlName='team' [(ngModel)]='authService.user.team' (ionChange)='updateTeam()' [(readonly)]='isReadOnly'></ion-input> -->\n\t\t\t\t        <ion-select  class='team-input' type='text' formControlName='team' [(ngModel)]='authService.user.team' (ionChange)='updateTeam()' >\n\t\t\t\t        \t<ion-select-option value=\"admin\">Admin</ion-select-option>\n\t\t\t\t        \t<ion-select-option value=\"operations\">Operations</ion-select-option>\n\t\t\t\t        \t<ion-select-option value=\"marketing\">Marketing</ion-select-option>\n\t\t\t\t        \t<ion-select-option value=\"camps\">Camps</ion-select-option>\n\t\t\t\t        </ion-select >\n\t\t\t      \t</ion-item>\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.team\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"settingsForm.get('team').hasError(validation.type) && (settingsForm.get('team').dirty || settingsForm.get('team').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\t  \t\t\t    </ion-col>\n  \t\t\t  \t\t\n  \t\t\t  \t</div>\n  \t\t\t  </ion-row>\n\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-grid>\n\t\t\t\t</div>\n\t\t\t\t<ion-grid>\n\n  \t\t\t  <ion-row>\n\n  \t\t\t    <ion-col>\n  \t\t\t      <ion-item lines='none' class='profile-item'> \n  \t\t\t        <ion-label position='floating'>First Name</ion-label>\n  \t\t\t        <ion-input type='text' formControlName='firstName' [(ngModel)]='authService.user.first_name' (ionChange)='updateFirstName()' [(readonly)]='isReadOnly'></ion-input>\n  \t\t\t      </ion-item>\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.firstName\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"settingsForm.get('firstName').hasError(validation.type) && (settingsForm.get('firstName').dirty || settingsForm.get('firstName').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n  \t\t\t    </ion-col>\n\n  \t\t\t  </ion-row>\n\n  \t\t\t  <ion-row>\n\n  \t\t\t    <ion-col>\n  \t\t\t      <ion-item lines='none' class='profile-item'>\n  \t\t\t        <ion-label position='floating'>Last Name</ion-label>\n  \t\t\t        <ion-input type='text' formControlName='lastName' [(ngModel)]='authService.user.last_name' (ionChange)='updateLastName()' [(readonly)]='isReadOnly'></ion-input>\n  \t\t\t      </ion-item>\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.lastName\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"settingsForm.get('lastName').hasError(validation.type) && (settingsForm.get('lastName').dirty || settingsForm.get('lastName').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n  \t\t\t    </ion-col>\n\n  \t\t\t  </ion-row>\n\n  \t\t\t  <ion-row>\n\n  \t\t\t    <ion-col>\n\n  \t\t\t      <ion-item lines='none' class='profile-item'>\n  \t\t\t        <ion-label position='floating'>Email</ion-label>\n  \t\t\t        <ion-input type='text' formControlName='email' [(ngModel)]='authService.user.email' readonly='true'></ion-input>\n  \t\t\t      </ion-item>\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.email\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"settingsForm.get('email').hasError(validation.type) && (settingsForm.get('email').dirty || settingsForm.get('email').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\n  \t\t\t    </ion-col>\n  \t\t\t    \n  \t\t\t  </ion-row>\n\n  \t\t\t  <ion-row>\n\n  \t\t\t    <ion-col>\n\n  \t\t\t      <ion-item lines='none' class='profile-item'>\n  \t\t\t        <ion-label position='floating'>Contact Number</ion-label>\n  \t\t\t        <ion-input type='text' formControlName='contactNumber'  [(ngModel)]='authService.user.contact_number' (ionChange)='updateContactNumber()' [(readonly)]='isReadOnly'></ion-input>\n  \t\t\t      </ion-item>\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.contactNumber\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"settingsForm.get('contactNumber').hasError(validation.type) && (settingsForm.get('contactNumber').dirty || settingsForm.get('contactNumber').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\n  \t\t\t    </ion-col>\n\n  \t\t\t  </ion-row>\n\n  \t\t\t  <ion-row>\n\n  \t\t\t    <ion-col>\n\n  \t\t\t      <ion-item lines='none' class='profile-item'>\n  \t\t\t        <ion-label position='floating'>Birthday</ion-label>\n  \t\t\t        <ion-datetime class='datetime-input' display-format=\"MMM DD, YYYY\" formControlName='birthdate' [(ngModel)]='authService.user.birthdate' (ionChange)='updateBirthdate()' [(readonly)]='isReadOnly'></ion-datetime>\n  \t\t\t      </ion-item>\n\t\t\t        <div class=\"error-list\" >\n\t\t\t        \t<div *ngFor=\"let validation of validationMessages.birthdate\" >\n\t\t\t\t        \t<h5 class=\"error-msg\" *ngIf=\"settingsForm.get('birthdate').hasError(validation.type) && (settingsForm.get('birthdate').dirty || settingsForm.get('birthdate').touched)\" >\n\t\t\t\t        \t\t{{validation.message}}\n\t\t\t\t        \t</h5>\n\t\t\t        \t</div>\n\t\t\t        </div>\n\n  \t\t\t    </ion-col>\n\n\n  \t\t\t  </ion-row>\n\n  \t\t\t</ion-grid>\n\n\t\t\t\t<div class='action-row'>\n\t\t\t\t\t<!-- <ion-button class='edit-btn' (click)='onClickEditProfile($event)' fill='clear'>\n\t\t\t\t\t\tEDIT PROFILE\n\t\t\t\t\t</ion-button> -->\n\t\t\t\t\t<ion-button class='-btn' (click)='teamDetails($event)' fill='clear'>\n\t\t\t\t\tTEAM DETAILS\n\t\t\t\t\t</ion-button>\n\t\t\t\t</div>\n\n\t\t\t</form>\n\t\t</div>\n\t\t\n</ion-content>\n\n\n<ion-toolbar class='extra-toolbar' color=\"primary\">\n</ion-toolbar>\n\n<input type=\"file\" name=\"\" style='display: none;' class='hidden-input'/>\n"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar-container {\n  max-width: 140px;\n  min-width: 140px;\n  min-height: 140px;\n  border: 2px solid var(--yellow);\n  margin-left: 18px;\n  position: relative; }\n\n.myprofile-text {\n  color: var(--yellow); }\n\nion-label {\n  color: var(--red) !important;\n  font-weight: bold;\n  font-size: 26px; }\n\n@media (max-width: 599px) {\n    ion-label {\n      max-height: 18px; } }\n\nion-input, ion-datetime, ion-select {\n  color: var(--ion-color-light);\n  background: var(--yellow);\n  --padding-start: 8px !important; }\n\n@media (max-width: 599px) {\n    ion-input, ion-datetime, ion-select {\n      max-height: 22px;\n      font-size: 13px;\n      --padding-top: 0px;\n      --padding-bottom: 0px; } }\n\nion-button {\n  color: var(--ion-color-light) !important;\n  background: var(--red) !important;\n  --background: var(--red) !important; }\n\n.action-row {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0 auto;\n  padding: 0 24px; }\n\n.edit-avatar-btn {\n  background: var(--ion-color-dark-tint);\n  color: var(--ion-color-light);\n  position: absolute;\n  padding: 4px 12px;\n  bottom: 0;\n  left: 33%;\n  font-size: 14px;\n  margin: 0;\n  cursor: pointer; }\n\n.avatar-col {\n  display: flex;\n  justify-content: center;\n  padding: 8px; }\n\n.edit-btn {\n  --color-activated: var(--yellow); }\n\n.avatar {\n  width: 100%;\n  height: 100%; }\n\n.profile-item ion-label {\n  margin-top: 0px; }\n\n@media (max-width: 599px) {\n  .profile-item {\n    max-height: 56px; } }\n\n.avatar-team-wrapper {\n  display: flex;\n  justify-content: space-between; }\n\nion-grid {\n  padding: 0; }\n\nion-col {\n  padding: 0; }\n\n.avatar-container {\n  max-width: 90px;\n  min-width: 90px;\n  min-width: 90px;\n  min-height: 90px; }\n\n.head-container {\n  margin-bottom: 18px; }\n\n.extra-toolbar {\n  height: 15px; }\n\n@media (max-width: 599px) {\n  ion-toolbar {\n    /*height: 35px;*/ } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXEpvblxcUHJvamVjdHNcXERMU1UtTkNDLTU2NzgtZnJlZWxhbmNlL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXEpvblxcUHJvamVjdHNcXERMU1UtTkNDLTU2NzgtZnJlZWxhbmNlL3NyY1xcYXBwXFxtb2JpbGVfbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msb0JBQW9CLEVBQUE7O0FBR3JCO0VBQ0MsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FDZFo7SURXSjtNQVFFLGdCQUFnQixFQUFBLEVBRWpCOztBQUVEO0VBQ0MsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QiwrQkFBZ0IsRUFBQTs7QUMxQmI7SUR1Qko7TUFPRyxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGtCQUFjO01BQ2QscUJBQWlCLEVBQUEsRUFHbkI7O0FBRUQ7RUFDQyx3Q0FBd0M7RUFDeEMsaUNBQWlDO0VBQ2pDLG1DQUFhLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Msc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2I7RUFDQyxnQ0FBa0IsRUFBQTs7QUFHbkI7RUFDQyxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdiO0VBQ0MsZUFBZSxFQUFBOztBQy9FWjtFRGlGSjtJQUdFLGdCQUFnQixFQUFBLEVBRWpCOztBQUVEO0VBQ0MsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLFVBQVUsRUFBQTs7QUFHWDtFQUNDLFVBQVUsRUFBQTs7QUFHWDtFQUNDLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLFlBQVksRUFBQTs7QUNqSFQ7RURxSEo7SUFHSSxnQkFBQSxFQUFpQixFQUVwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9tb2JpbGVfbWl4aW4nO1xyXG5cclxuLmhlYWQtY29udGFpbmVye1xyXG59XHJcblxyXG4uYXZhdGFyLWNvbnRhaW5lcntcclxuXHRtYXgtd2lkdGg6IDE0MHB4O1xyXG5cdG1pbi13aWR0aDogMTQwcHg7XHJcblx0bWluLWhlaWdodDogMTQwcHg7XHJcblx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0teWVsbG93KTtcclxuXHRtYXJnaW4tbGVmdDogMThweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5teXByb2ZpbGUtdGV4dHtcclxuXHRjb2xvcjogdmFyKC0teWVsbG93KTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG5cdGNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG5cclxuXHJcblx0XHRcdFxyXG5cdEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuXHRcdG1heC1oZWlnaHQ6IDE4cHg7XHJcblx0fVxyXG59XHJcblxyXG5pb24taW5wdXQsIGlvbi1kYXRldGltZSwgaW9uLXNlbGVjdHtcclxuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3cpO1xyXG5cdC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XHJcblxyXG5cdFx0XHJcblx0QGluY2x1ZGUgZm9yLXNpemUocGhvbmUtb25seSkge1xyXG4gIFx0bWF4LWhlaWdodDogMjJweDtcclxuICBcdGZvbnQtc2l6ZTogMTNweDtcclxuICBcdC0tcGFkZGluZy10b3A6IDBweDtcclxuICBcdC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuXHR9XHJcblxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tcmVkKSAhaW1wb3J0YW50O1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0tcmVkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aW9uLXJvd3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG59XHJcblxyXG4uZWRpdC1hdmF0YXItYnRue1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwYWRkaW5nOiA0cHggMTJweDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMzMlO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDA7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXZhdGFyLWNvbHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmVkaXQtYnRue1xyXG5cdC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS15ZWxsb3cpO1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtaXRlbSBpb24tbGFiZWx7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5wcm9maWxlLWl0ZW17XHJcblxyXG5cdEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuXHRcdG1heC1oZWlnaHQ6IDU2cHg7XHJcblx0fVxyXG59XHJcblxyXG4uYXZhdGFyLXRlYW0td3JhcHBlcntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYXZhdGFyLWNvbnRhaW5lcntcclxuXHRtYXgtd2lkdGg6IDkwcHg7XHJcblx0bWluLXdpZHRoOiA5MHB4O1xyXG5cdG1pbi13aWR0aDogOTBweDtcclxuXHRtaW4taGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4uaGVhZC1jb250YWluZXJ7XHJcblx0bWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLmV4dHJhLXRvb2xiYXJ7XHJcblx0aGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcblxyXG4gIEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuICAgIC8qaGVpZ2h0OiAzNXB4OyovXHJcbiAgfVxyXG59IiwiQG1peGluIGZvci1zaXplKCRyYW5nZSkge1xyXG4gICRwaG9uZS11cHBlci1ib3VuZGFyeTogNjAwcHg7XHJcbiAgJHRhYmxldC1wb3J0cmFpdC11cHBlci1ib3VuZGFyeTogOTAwcHg7XHJcbiAgJHRhYmxldC1sYW5kc2NhcGUtdXBwZXItYm91bmRhcnk6IDEyMDBweDtcclxuICAkZGVza3RvcC11cHBlci1ib3VuZGFyeTogMTgwMHB4O1xyXG5cclxuICBAaWYgJHJhbmdlID09IHBob25lLW9ubHkge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHBob25lLXVwcGVyLWJvdW5kYXJ5IC0gMX0pIHsgQGNvbnRlbnQ7IH1cclxuICB9IEBlbHNlIGlmICRyYW5nZSA9PSB0YWJsZXQtcG9ydHJhaXQtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRwaG9uZS11cHBlci1ib3VuZGFyeSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IHRhYmxldC1sYW5kc2NhcGUtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQtcG9ydHJhaXQtdXBwZXItYm91bmRhcnkpIHsgQGNvbnRlbnQ7IH1cclxuICB9IEBlbHNlIGlmICRyYW5nZSA9PSBkZXNrdG9wLXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0LWxhbmRzY2FwZS11cHBlci1ib3VuZGFyeSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IGJpZy1kZXNrdG9wLXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkZGVza3RvcC11cHBlci1ib3VuZGFyeSkgeyBAY29udGVudDsgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
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






var ProfilePage = /** @class */ (function () {
    function ProfilePage(formBuilder, authService, router, storageService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.storageService = storageService;
        this.isReadOnly = false;
        this.validationMessages = {
            'firstName': [
                { type: 'minlength', message: 'name must be at least 2 characters long.' },
                { type: 'maxlength', message: 'name cannot be more than 30 characters long.' },
            ],
            'lastName': [
                { type: 'minlength', message: 'name must be at least 2 characters long.' },
                { type: 'maxlength', message: 'name cannot be more than 30 characters long.' },
            ],
            'email': [
                { type: 'email', message: 'must be a valid email.' }
            ],
            'contactNumber': [
                { type: 'minlength', message: 'contact number should be exactly 11 characters.' }
            ],
            'birthdate': [
                { type: 'required', message: 'contact number is required.' },
            ],
            'team': [
                { type: 'required', message: 'contact number is required.' },
            ],
        };
        // A letter, a number, an uppercase, min of 8
        this.passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$';
        // email regex
        this.emailRegex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
        console.log('[settings constructor]', this.authService.user);
        this.settingsForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ])),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            team: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.navTo = function (route) {
        this.router.navigateByUrl(route);
    };
    ProfilePage.prototype.updateFirstName = function () {
        if (this.settingsForm.get('firstName').status != 'INVALID')
            this.authService.updateUser();
    };
    ProfilePage.prototype.updateLastName = function () {
        if (this.settingsForm.get('lastName').status != 'INVALID')
            this.authService.updateUser();
    };
    ProfilePage.prototype.updateBirthdate = function () {
        if (this.settingsForm.get('birthdate').status != 'INVALID')
            this.authService.updateUser();
    };
    ProfilePage.prototype.updateContactNumber = function () {
        if (this.settingsForm.get('contactNumber').status != 'INVALID')
            this.authService.updateUser();
    };
    ProfilePage.prototype.updateTeam = function () {
        if (this.settingsForm.get('team').status != 'INVALID')
            this.authService.updateUser();
    };
    ProfilePage.prototype.onClickEditProfile = function (evt) {
        console.log('this.isReadOnly', this.isReadOnly);
        this.isReadOnly = false;
        console.log('this.isReadOnly', this.isReadOnly);
    };
    ProfilePage.prototype.changeAvatar = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__('.hidden-input').click();
        jquery__WEBPACK_IMPORTED_MODULE_4__('.hidden-input').change(function (e) { return __awaiter(_this, void 0, void 0, function () {
            var file, imageUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.stopImmediatePropagation();
                        file = e.target.files[0];
                        console.log('The file "' + file.name + '" has been selected.');
                        return [4 /*yield*/, this.storageService.uploadFile(file, this.authService.user.team, this.authService.user.team + "/" + this.authService.user.last_name + "_" + this.authService.user.id)];
                    case 1:
                        imageUrl = _a.sent();
                        this.authService.user.profileImageUrl = imageUrl;
                        this.authService.updateUser();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ProfilePage.prototype.teamDetails = function (evt) {
    };
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map