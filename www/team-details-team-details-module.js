(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-details-team-details-module"],{

/***/ "./src/app/team-details/team-details.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/team-details/team-details.module.ts ***!
  \*****************************************************/
/*! exports provided: TeamDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailsPageModule", function() { return TeamDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _team_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-details.page */ "./src/app/team-details/team-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _team_details_page__WEBPACK_IMPORTED_MODULE_5__["TeamDetailsPage"]
    }
];
var TeamDetailsPageModule = /** @class */ (function () {
    function TeamDetailsPageModule() {
    }
    TeamDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_team_details_page__WEBPACK_IMPORTED_MODULE_5__["TeamDetailsPage"]]
        })
    ], TeamDetailsPageModule);
    return TeamDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/team-details/team-details.page.html":
/*!*****************************************************!*\
  !*** ./src/app/team-details/team-details.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons >\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<h6 class='title'>Team Details</h6>\n\t<div class='main-container'>\n\n\t\t<div class=''>\n\t\t  <ion-item lines='none' class='profile-item'>\n\t\t    <ion-label position='floating'>TEAM</ion-label>\n\t\t    <ion-input type='text'  [(ngModel)]='team' readonly='true'></ion-input>\n\t\t  </ion-item>\n\t\t  <ion-item lines='none' class='profile-item'>\n\t\t    <ion-label position='floating'>DESCRIPTION</ion-label>\n\t\t\t<ion-textarea  class='' rows=\"6\"  [(ngModel)]='description' readonly='true'>\n\t\t\t</ion-textarea >\n\t\t  </ion-item>\n\t\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/team-details/team-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/team-details/team-details.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  color: var(--red) !important;\n  font-weight: bold;\n  font-size: 26px; }\n  @media (max-width: 599px) {\n    ion-label {\n      max-height: 18px; } }\n  ion-input, ion-datetime, ion-select {\n  color: var(--ion-color-light);\n  background: var(--yellow);\n  --padding-start: 8px !important; }\n  @media (max-width: 599px) {\n    ion-input, ion-datetime, ion-select {\n      max-height: 22px;\n      font-size: 13px;\n      --padding-top: 0px;\n      --padding-bottom: 0px; } }\n  ion-textarea {\n  color: var(--ion-color-light);\n  background: var(--yellow);\n  --padding-start: 8px !important; }\n  @media (max-width: 599px) {\n    ion-textarea {\n      max-height: 125px;\n      font-size: 13px;\n      --padding-top: 0px;\n      --padding-bottom: 0px; } }\n  ion-button {\n  color: var(--ion-color-light) !important;\n  background: var(--red) !important;\n  --background: var(--red) !important; }\n  ion-grid {\n  padding: 0; }\n  ion-col {\n  padding: 0; }\n  @media (max-width: 599px) {\n  ion-toolbar {\n    /*height: 35px;*/ } }\n  .main-container {\n  justify-content: center; }\n  .title {\n  text-align: center;\n  color: var(--yellow);\n  font-size: 24px;\n  font-weight: bold; }\n  .main-container {\n  height: initial; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1kZXRhaWxzL0M6XFxVc2Vyc1xcSm9uXFxQcm9qZWN0c1xcRExTVS1OQ0MtNTY3OC1mcmVlbGFuY2Uvc3JjXFxhcHBcXHRlYW0tZGV0YWlsc1xcdGVhbS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGVhbS1kZXRhaWxzL0M6XFxVc2Vyc1xcSm9uXFxQcm9qZWN0c1xcRExTVS1OQ0MtNTY3OC1mcmVlbGFuY2Uvc3JjXFxhcHBcXG1vYmlsZV9taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUNFWjtJRExKO01BUUUsZ0JBQWdCLEVBQUEsRUFFakI7RUFFRDtFQUNDLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsK0JBQWdCLEVBQUE7RUNWYjtJRE9KO01BT0csZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixrQkFBYztNQUNkLHFCQUFpQixFQUFBLEVBR25CO0VBQ0Q7RUFDQyw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLCtCQUFnQixFQUFBO0VDeEJiO0lEcUJKO01BT0csaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixrQkFBYztNQUNkLHFCQUFpQixFQUFBLEVBSW5CO0VBQ0Q7RUFDQyx3Q0FBd0M7RUFDeEMsaUNBQWlDO0VBQ2pDLG1DQUFhLEVBQUE7RUFJZDtFQUNDLFVBQVUsRUFBQTtFQUdYO0VBQ0MsVUFBVSxFQUFBO0VDaERQO0VEbURKO0lBR0ksZ0JBQUEsRUFBaUIsRUFFcEI7RUFFRDtFQUNDLHVCQUF1QixFQUFBO0VBR3hCO0VBQ0Msa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7RUFHbEI7RUFDQyxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZWFtLWRldGFpbHMvdGVhbS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL21vYmlsZV9taXhpbic7XHJcblxyXG5pb24tbGFiZWx7XHJcblx0Y29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDI2cHg7XHJcblxyXG5cclxuXHRcdFx0XHJcblx0QGluY2x1ZGUgZm9yLXNpemUocGhvbmUtb25seSkge1xyXG5cdFx0bWF4LWhlaWdodDogMThweDtcclxuXHR9XHJcbn1cclxuXHJcbmlvbi1pbnB1dCwgaW9uLWRhdGV0aW1lLCBpb24tc2VsZWN0e1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXllbGxvdyk7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxuXHJcblx0XHRcclxuXHRAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcbiAgXHRtYXgtaGVpZ2h0OiAyMnB4O1xyXG4gIFx0Zm9udC1zaXplOiAxM3B4O1xyXG4gIFx0LS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gIFx0LS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cdH1cclxuXHJcbn1cclxuaW9uLXRleHRhcmVhe1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXllbGxvdyk7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxuXHJcblx0XHRcclxuXHRAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcbiAgXHRtYXgtaGVpZ2h0OiAxMjVweDtcclxuICBcdGZvbnQtc2l6ZTogMTNweDtcclxuICBcdC0tcGFkZGluZy10b3A6IDBweDtcclxuICBcdC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuXHR9XHJcblxyXG5cclxufVxyXG5pb24tYnV0dG9ue1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tcmVkKSAhaW1wb3J0YW50O1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0tcmVkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuaW9uLWdyaWR7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuXHJcbiAgQGluY2x1ZGUgZm9yLXNpemUocGhvbmUtb25seSkge1xyXG4gICAgLypoZWlnaHQ6IDM1cHg7Ki9cclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lcntcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxle1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogdmFyKC0teWVsbG93KTtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lcntcclxuXHRoZWlnaHQ6IGluaXRpYWw7XHJcbn0iLCJAbWl4aW4gZm9yLXNpemUoJHJhbmdlKSB7XHJcbiAgJHBob25lLXVwcGVyLWJvdW5kYXJ5OiA2MDBweDtcclxuICAkdGFibGV0LXBvcnRyYWl0LXVwcGVyLWJvdW5kYXJ5OiA5MDBweDtcclxuICAkdGFibGV0LWxhbmRzY2FwZS11cHBlci1ib3VuZGFyeTogMTIwMHB4O1xyXG4gICRkZXNrdG9wLXVwcGVyLWJvdW5kYXJ5OiAxODAwcHg7XHJcblxyXG4gIEBpZiAkcmFuZ2UgPT0gcGhvbmUtb25seSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3skcGhvbmUtdXBwZXItYm91bmRhcnkgLSAxfSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IHRhYmxldC1wb3J0cmFpdC11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHBob25lLXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gdGFibGV0LWxhbmRzY2FwZS11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldC1wb3J0cmFpdC11cHBlci1ib3VuZGFyeSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IGRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQtbGFuZHNjYXBlLXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gYmlnLWRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wLXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/team-details/team-details.page.ts":
/*!***************************************************!*\
  !*** ./src/app/team-details/team-details.page.ts ***!
  \***************************************************/
/*! exports provided: TeamDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailsPage", function() { return TeamDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamDetailsPage = /** @class */ (function () {
    function TeamDetailsPage(authService) {
        this.authService = authService;
        this.description = '';
        this.team = '';
        switch (this.authService.user.team) {
            case "admin":
                this.team = 'Administration';
                this.description = 'In charge of finance and other administrative decisions';
                break;
            case "camps":
                this.team = 'Camps & Competitions';
                this.description = "In charge of judging and making sure that the rules are implemented, \n  \t\t\t\tfollowed and observed. They are also the ones who teach and coach during camps";
                break;
            case "registration":
                this.team = 'Registration';
                this.description = 'In charge of inviting the participating schools and teams. They are also the ones who handle requirements, and take note if the teams arrived in the venue completely.';
                break;
            case "operations":
                this.team = 'Operations';
                this.description = 'In charge of the venue reservations overall logistics, and overall production work (stagings, tracking, etc.), issuance of permits, and arranging the on-site medics';
                break;
            case "marketing":
                this.team = 'Marketing';
                this.description = "In charge of social media and making the event reach its intended audience by publishing posts and visuals to entice audience and participating teams. They are also in charge of coordinating with media and sponsors";
                break;
        }
    }
    TeamDetailsPage.prototype.ngOnInit = function () {
    };
    TeamDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-details',
            template: __webpack_require__(/*! ./team-details.page.html */ "./src/app/team-details/team-details.page.html"),
            styles: [__webpack_require__(/*! ./team-details.page.scss */ "./src/app/team-details/team-details.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], TeamDetailsPage);
    return TeamDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=team-details-team-details-module.js.map