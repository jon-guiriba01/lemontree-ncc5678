(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.html":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\t<div class='main-container'>\n\t\t<div class='action-row'>\n\t\t\t<ion-grid>\n\t\t\t  <ion-row>\n\t\t\t    <ion-col (click)='newTask()'>\n\t\t\t    \t<ion-card class='option-card newtask'>\n\t\t\t    \t  <ion-card-content>\n\t\t\t    \t  \t<!-- <img class='card-icon' src='assets/imgs/new_task_icon.png'/> -->\n\t\t\t    \t  </ion-card-content>\n\t\t\t    \t</ion-card>\n\t\t\t    \t<h6>Add Task</h6>\n\t\t\t    </ion-col>\n\t\t\t    <ion-col>\n\t\t\t    \t<ion-card class='option-card newfile' (click)='upload()'>\n\t\t\t    \t  <ion-card-content class='option-card'>\n\t\t\t    \t  \t<!-- <img class='card-icon' src='assets/imgs/new_file_icon.png'/> -->\n\t\t\t    \t  </ion-card-content>\n\t\t\t    \t</ion-card>\n\t\t\t    \t<h6>Add File</h6>\n\t\t\t    </ion-col>\n\t\t\t  </ion-row>\n\t\t\t  <ion-row>\n\t\t\t    <ion-col (click)=\"navTo('/profile')\">\n\t\t\t    \t<ion-card class='option-card profile' >\n\t\t\t    \t  <ion-card-content>\n\t\t\t    \t  \t<!-- <img class='card-icon' src='assets/imgs/profile_icon.png'/> -->\n\t\t\t    \t  </ion-card-content>\n\t\t\t    \t</ion-card>\n\t\t\t    \t<h6>Profile</h6>\n\t\t\t    </ion-col>\n\t\t\t    <ion-col (click)=\"navTo('/settings')\">\n\t\t\t    \t<ion-card class='option-card settings'>\n\t\t\t    \t  <ion-card-content>\n\t\t\t    \t  \t<!-- <img class='card-icon' src='assets/imgs/gear_icon.png'/> -->\n\t\t\t    \t  </ion-card-content>\n\t\t\t    \t</ion-card>\n\t\t\t    \t<h6>Settings</h6>\n\t\t\t    </ion-col>\n\t\t\t  </ion-row>\n\t\t\t</ion-grid>\n\t\t</div>\n\n\t\t<ion-row class='dashboard-row'>\n\t\t  <ion-col>\n\t\t  \t<ion-card class='dashboard-card'>\n\t\t  \t  <ion-card-content>\n\t\t  \t  \t<h5 class='dashboard-title'>Upcoming Events:</h5>\n\t\t  \t  \t<div class='event-item' *ngFor='let event of upcomingEvents'>\n\t\t  \t  \t\t<h5>\n  \t  \t\t\t\t\t{{event.formattedDate}}\n\t\t  \t  \t\t</h5>\n\t\t  \t  \t\t<h5>\n  \t  \t\t\t\t\t{{event.name}}\n\t\t  \t  \t\t</h5>\n\t\t  \t  \t</div>\n\t\t  \t  </ion-card-content>\n\t\t  \t</ion-card>\n\t\t  </ion-col>\n\t\t</ion-row>\n\n\t\t</div>\n</ion-content>\n\n<input type=\"file\" name=\"\" style='display: none;' class='hidden-input'/>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-icon {\n  max-width: 180px;\n  max-height: 180px;\n  width: 180px;\n  height: 180px; }\n\n.option-card {\n  min-width: 150px;\n  min-height: 150px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100px; }\n\n@media (max-width: 599px) {\n    .option-card {\n      min-width: 80px;\n      min-height: 80px;\n      background-size: 50px; } }\n\n.option-card.newtask {\n  background-image: url('new_task_icon.png'); }\n\n.option-card.newfile {\n  background-image: url('new_file_icon.png'); }\n\n.option-card.profile {\n  background-image: url('profile_icon.png'); }\n\n.option-card.settings {\n  background-image: url('gear_icon.png'); }\n\n.main-container {\n  justify-content: flex-start; }\n\n.dashboard-card {\n  height: 100%; }\n\n@media (max-width: 599px) {\n    .dashboard-card {\n      height: 455px; } }\n\n.dashboard-row {\n  flex-basis: 60%; }\n\n.dashboard-row {\n  flex-basis: 60%; }\n\n.action-row {\n  flex-basis: 40%; }\n\nh6 {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: var(--ion-color-dark-tint); }\n\n@media (max-width: 599px) {\n    h6 {\n      font-size: 14px; } }\n\n.dashboard-title {\n  color: var(--ion-color-warning);\n  font-size: 26px;\n  font-weight: bold;\n  margin-bottom: 16px; }\n\n@media (max-width: 599px) {\n    .dashboard-title {\n      font-size: 18px;\n      margin-bottom: 8px; } }\n\n.event-item {\n  display: flex;\n  justify-content: space-between; }\n\n.event-item h5 {\n  flex-basis: 50%;\n  text-align: left;\n  font-size: 24px; }\n\n@media (max-width: 599px) {\n    .event-item h5 {\n      font-size: 13px; } }\n\n.option-card {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcSm9uXFxQcm9qZWN0c1xcRExTVS1OQ0MtNTY3OC1mcmVlbGFuY2Uvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcSm9uXFxQcm9qZWN0c1xcRExTVS1OQ0MtNTY3OC1mcmVlbGFuY2Uvc3JjXFxhcHBcXG1vYmlsZV9taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdkO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUVqQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQ1JuQjtJREVKO01BU0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixxQkFBcUIsRUFBQSxFQUl0Qjs7QUFFRDtFQUNDLDBDQUE0RCxFQUFBOztBQUc3RDtFQUNDLDBDQUE0RCxFQUFBOztBQUc3RDtFQUNDLHlDQUEyRCxFQUFBOztBQUc1RDtFQUNDLHNDQUF3RCxFQUFBOztBQUd6RDtFQUNDLDJCQUEyQixFQUFBOztBQUc1QjtFQUNDLFlBQVksRUFBQTs7QUN4Q1Q7SUR1Q0o7TUFJRSxhQUFhLEVBQUEsRUFHZDs7QUFFRDtFQUNDLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsZUFBZSxFQUFBOztBQUdoQjtFQUNDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlDQUFpQyxFQUFBOztBQ2hFOUI7SUQ0REo7TUFTRSxlQUFlLEVBQUEsRUFFaEI7O0FBRUQ7RUFDQywrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUM3RWhCO0lEeUVKO01BUUUsZUFBZTtNQUNmLGtCQUFrQixFQUFBLEVBRW5COztBQUVEO0VBQ0MsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQzlGWjtJRDJGSjtNQU9FLGVBQWUsRUFBQSxFQUVoQjs7QUFFRDtFQUNDLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbW9iaWxlX21peGluJztcclxuXHJcbi5jYXJkLWljb257XHJcblx0bWF4LXdpZHRoOiAxODBweDtcclxuXHRtYXgtaGVpZ2h0OiAxODBweDtcclxuXHR3aWR0aDogMTgwcHg7XHJcblx0aGVpZ2h0OiAxODBweDtcclxufVxyXG5cclxuLm9wdGlvbi1jYXJke1xyXG5cdG1pbi13aWR0aDogMTUwcHg7XHJcblx0bWluLWhlaWdodDogMTUwcHg7XHJcblxyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XHJcblxyXG5cdEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuXHRcdG1pbi13aWR0aDogODBweDtcclxuXHRcdG1pbi1oZWlnaHQ6IDgwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IDUwcHg7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbi5vcHRpb24tY2FyZC5uZXd0YXNre1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvbmV3X3Rhc2tfaWNvbi5wbmcnKTtcclxufVxyXG5cclxuLm9wdGlvbi1jYXJkLm5ld2ZpbGV7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9uZXdfZmlsZV9pY29uLnBuZycpO1xyXG59XHJcblxyXG4ub3B0aW9uLWNhcmQucHJvZmlsZXtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL3Byb2ZpbGVfaWNvbi5wbmcnKTtcclxufVxyXG5cclxuLm9wdGlvbi1jYXJkLnNldHRpbmdze1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvZ2Vhcl9pY29uLnBuZycpO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmR7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdFxyXG5cdEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuXHRcdGhlaWdodDogNDU1cHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLmRhc2hib2FyZC1yb3d7XHJcblx0ZmxleC1iYXNpczogNjAlO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLXJvd3tcclxuXHRmbGV4LWJhc2lzOiA2MCU7XHJcbn1cclxuXHJcbi5hY3Rpb24tcm93e1xyXG5cdGZsZXgtYmFzaXM6IDQwJTtcclxufVxyXG5cclxuaDZ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcblxyXG5cclxuXHRcclxuXHRAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG59XHJcblxyXG4uZGFzaGJvYXJkLXRpdGxle1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG5cclxuXHRAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcblx0fVxyXG59XHJcblxyXG4uZXZlbnQtaXRlbXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmV2ZW50LWl0ZW0gaDV7XHJcblx0ZmxleC1iYXNpczogNTAlO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cclxuXHJcblx0QGluY2x1ZGUgZm9yLXNpemUocGhvbmUtb25seSkge1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdH1cclxufVxyXG5cclxuLm9wdGlvbi1jYXJke1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufSIsIkBtaXhpbiBmb3Itc2l6ZSgkcmFuZ2UpIHtcclxuICAkcGhvbmUtdXBwZXItYm91bmRhcnk6IDYwMHB4O1xyXG4gICR0YWJsZXQtcG9ydHJhaXQtdXBwZXItYm91bmRhcnk6IDkwMHB4O1xyXG4gICR0YWJsZXQtbGFuZHNjYXBlLXVwcGVyLWJvdW5kYXJ5OiAxMjAwcHg7XHJcbiAgJGRlc2t0b3AtdXBwZXItYm91bmRhcnk6IDE4MDBweDtcclxuXHJcbiAgQGlmICRyYW5nZSA9PSBwaG9uZS1vbmx5IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRwaG9uZS11cHBlci1ib3VuZGFyeSAtIDF9KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gdGFibGV0LXBvcnRyYWl0LXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkcGhvbmUtdXBwZXItYm91bmRhcnkpIHsgQGNvbnRlbnQ7IH1cclxuICB9IEBlbHNlIGlmICRyYW5nZSA9PSB0YWJsZXQtbGFuZHNjYXBlLXVwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0LXBvcnRyYWl0LXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldC1sYW5kc2NhcGUtdXBwZXItYm91bmRhcnkpIHsgQGNvbnRlbnQ7IH1cclxuICB9IEBlbHNlIGlmICRyYW5nZSA9PSBiaWctZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGRlc2t0b3AtdXBwZXItYm91bmRhcnkpIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/events.service */ "./src/app/services/events.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals_task_modal_task_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/task-modal/task-modal.page */ "./src/app/modals/task-modal/task-modal.page.ts");
/* harmony import */ var _models_app_objects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/app-objects */ "./src/models/app-objects.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
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









var DashboardPage = /** @class */ (function () {
    function DashboardPage(eventService, authService, storageService, router, modalController) {
        var _this = this;
        this.eventService = eventService;
        this.authService = authService;
        this.storageService = storageService;
        this.router = router;
        this.modalController = modalController;
        this.upcomingEvents = [];
        this.eventService.getUpcomingEvents().then(function (res) {
            _this.upcomingEvents = res;
            console.log('dashboard events', res);
        }).catch(function (err) {
            console.log("err", err);
        });
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.navTo = function (page) {
        this.router.navigateByUrl(page);
    };
    DashboardPage.prototype.newTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modals_task_modal_task_modal_page__WEBPACK_IMPORTED_MODULE_6__["TaskModalPage"],
                            componentProps: {
                                task: new _models_app_objects__WEBPACK_IMPORTED_MODULE_7__["Task"]('New Task Title', this.authService.user.team),
                                isCreateNew: true
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DashboardPage.prototype.upload = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_8__('.hidden-input').click();
        jquery__WEBPACK_IMPORTED_MODULE_8__('.hidden-input').change(function (e) {
            e.stopImmediatePropagation();
            var file = e.target.files[0];
            console.log('The file "' + file.name + '" has been selected.');
            _this.storageService.uploadFile(file, _this.authService.user.team);
        });
    };
    DashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map