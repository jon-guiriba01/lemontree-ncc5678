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
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.page */ "./src/app/task/task.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _task_page__WEBPACK_IMPORTED_MODULE_6__["TaskPage"]
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
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"]
            ],
            declarations: [_task_page__WEBPACK_IMPORTED_MODULE_6__["TaskPage"]]
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

module.exports = "<ion-content padding style=\"padding-top: 30px;\" forceOverscroll=\"false\">\n\t<div class=\"main-container\">\n\t\t<div class=\"action-group\">\n\t\t\t<img class='tab-bar-icon ' src='assets/imgs/settings_icon.png'/>\n\n\t\t\t<div id='filter-row'  class='action-row closed-list'>\n\t\t\t  <ion-button *ngFor='let filter of filters'\n\t\t\t  \tclass='filter-btn'\n\t  \t\t\t[ngClass]=\"[statusFilter==filter.value ? 'yellow-bg' : '']\"\n\t  \t\t\t(click)=\"selectStatusFilter(filter.value)\"\n  \t\t\t>\n\t\t\t    <ion-label>{{filter.name}}</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t</div>\n\n\t\t\t<img class='tab-bar-icon ' src='assets/imgs/sort_icon.png'/>\n\t\t\t<div id='department-row' class='action-row closed-list'>\n \n \t\t\t  <ion-button *ngFor='let department of departments'\n\t\t\t  \tclass='filter-btn'\n \t  \t\t\t[ngClass]=\"[selectedDepartment==department.value ? 'dark-bg' : '']\"\n \t  \t\t\t(click)=\"selectDepartment(department.value)\"\n   \t\t\t>\n \t\t\t    <ion-label>{{department.name}}</ion-label>\n \t\t\t  </ion-button>\n \t\t\t  \n\t\t\t</div>\n\n\t\t\t<img class='tab-bar-icon ' src='assets/imgs/sort2_icon.png'/>\n\t\t\t<div id='order-row' class='action-row closed-list'>\n \n \t\t\t  <ion-button *ngFor='let order of orders'\n\t\t\t  \tclass='filter-btn'\n \t  \t\t\t[ngClass]=\"[selectedOrder==order.value ? 'dark-bg' : '']\"\n \t  \t\t\t(click)=\"selectOrder(order.value)\"\n   \t\t\t>\n\t\t\t  \t<ion-icon name=\"{{order.icon}}\"></ion-icon>\n \t\t\t    <ion-label>{{order.name}}</ion-label>\n \t\t\t  </ion-button>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"tasks-group\">\n\t\t\t<div class=\"status-bar-legend\">\n\t\t\t\tLegend: <span class='red-bg' >0-50%</span> <span class='yellow-bg'>51-99%</span> <span class='green-bg'>100%</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div *ngFor='let task of taskService.tasks'>\n\t\t\t\t<ion-card *ngIf='\n\t\t\t\t( \n\t\t\t\t\ttask.name.toLowerCase().includes(searchService.searchInput.toLowerCase()\n\t\t\t\t\t) || searchService.searchInput == \"\" \n\t\t\t\t) \n\t\t\t\t&& (task.status == statusFilter || statusFilter == \"showall\") \n\t\t\t\t&& (task.group == selectedDepartment || selectedDepartment == \"showall\")'>\n\t\t\t\t  <ion-card-header class='task-header'>\n\t\t\t\t    <ion-card-title class='task-name'>\n\t\t\t\t    \t{{task.name}}\n\t\t\t\t    </ion-card-title>\n\n\t\t\t\t    <ion-button fill='clear' (click)='onClickTask($event, task)'>\n\t\t\t\t    \t<ion-icon name='arrow-dropright' class='task-edit-btn'></ion-icon>\n\t\t\t\t    </ion-button>\n\t\t\t\t  </ion-card-header>\n\t\t\t\t\n\t\t\t\t  <ion-card-content class='task-content'>\n\t\t\t\t    <ion-card-subtitle><b>DEADLINE:</b> {{task.deadline}}</ion-card-subtitle>\n\t\t\t\t    <ion-card-subtitle><b>ADDED BY:</b> {{task.author}}</ion-card-subtitle>\n\t\t\t\t    <ion-card-subtitle><b>IN-CHARGE:</b> {{task.team}}</ion-card-subtitle>\n\t\t\t\t  \t<div class='task-status'>\n\t\t\t\t  \t\t<h4>STATUS</h4>\n\t\t\t\t  \t\t<div class=\"progress-bar-row\">\n\t\t\t\t  \t\t\t<ion-progress-bar \n\t\t\t\t\t  \t\t\tstyle='height: 20px;' \n\t\t\t\t\t  \t\t\tclass=\"task-progress\"\n\t\t\t\t\t  \t\t\t[ngClass]=\"\n\t\t\t\t\t  \t\t\t[\n\t\t\t\t\t  \t\t\t\ttask.progress <= 0.5 ? 'red' : '', \n\t\t\t\t\t  \t\t\t\ttask.progress > 0.5 ? 'yellow' : '', \n\t\t\t\t\t  \t\t\t\ttask.progress == 1 ? 'green' : '' \n\t\t\t\t\t  \t\t\t]\n\t\t\t\t\t  \t\t\t\"\n\t\t\t\t\t  \t\t\tvalue=\"{{task.progress}}\"></ion-progress-bar>\n\t\t\t\t  \t\t</div>\n\t\t\t\t  \t</div>\n\t\t\t\t  </ion-card-content>\n\t\t\t\t</ion-card>\t\n\t\t\t\t\n\t\t\t</div>\t\t\n\t\t</div>\n\n\t</div>\n\n\t<ion-card class=\"newtask-container\" *ngIf=\"showAddTaskView\">\n\t\t<ion-card-content>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"addTaskName\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<div style=\"display: flex; justify-content: flex-end;\">\n\t\t\t\t<ion-button (click)='onClickAddTask($event)'>Add Task</ion-button>\n\t\t\t</div>\n\t\t</ion-card-content>\n\t</ion-card>\n\n  <ion-fab-button size=\"small\" class=\"task-fab\" (click)='onClickAddTask($event)'>\n  \t<ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-content>\n\n\t<!-- \n\t<ion-grid>\n\t  <ion-row no-padding class=\"matrix\">\n\t    <ion-col class='task-container' size=\"12\">\n\t      <ion-item class=\"task-header\">Do</ion-item>\n\t      <ion-list \n\t      dragula=\"drag-tasks\" \n\t      [(dragulaModel)]=\"taskService.todo\" \n\t      (dragulaModelChange)=\"onChangeDrag($event, 'todo')\"\n\t      lines=\"none\">\n        \t<div *ngFor=\"let task of taskService.todo\">\n\t\t        <ion-item \n\t\t        [color]=\"primary\" \n\t\t        expand=\"block\" \n\t\t        text-wrap \n\t\t        class='task-card'\n\t\t        *ngIf='task.group==department'\n\t\t        (click)='onClickTask($event, task)'\n\t\t        >\n\t\t          \t{{ task.name }}\n\t\t        </ion-item>\n        \t</div>\n\t      </ion-list>\n\t    </ion-col>\n\t\n\t    <ion-col class='task-container'  size=\"12\">\n\n\t      <ion-item class=\"task-header\">Doing</ion-item>\n\n\t      <ion-list \n\t      dragula=\"drag-tasks\" \n\t      [(dragulaModel)]=\"taskService.doing\" \n\t      (dragulaModelChange)=\"onChangeDrag($event, 'doing')\"\n\t      lines=\"none\">\n        \t<div *ngFor=\"let task of taskService.doing\">\n\t\t        <ion-item \n\t\t        [color]=\"primary\" \n\t\t        expand=\"block\" \n\t\t        text-wrap \n\t\t        class='task-card'\n\t\t        *ngIf='task.group==department'\n\t\t        (click)='onClickTask($event, task)'\n\t\t        >\n\t\t          \t{{ task.name }}\n\t\t        </ion-item>\n        \t</div>\n\t      </ion-list>\n\t    </ion-col>\n\t\n\t    <ion-col class='task-container' size=\"12\">\n\t      <ion-item class=\"task-header\">Done</ion-item>\n\n\t      <ion-list \n\t      dragula=\"drag-tasks\" \n\t      [(dragulaModel)]=\"taskService.done\" \n\t      (dragulaModelChange)=\"onChangeDrag($event, 'done')\"\n\t      lines=\"none\">\n        \t<div *ngFor=\"let task of taskService.done\">\n\t\t        <ion-item \n\t\t        [color]=\"primary\" \n\t\t        expand=\"block\" \n\t\t        text-wrap \n\t\t        class='task-card'\n\t\t        *ngIf='task.group==department'\n\t\t        (click)='onClickTask($event, task)'\n\t\t        >\n\t\t          \t{{ task.name }}\n\t\t        </ion-item>\n        \t</div>\n\t      </ion-list>\n\t    </ion-col>\n\n\t     </ion-row>\n\t   </ion-grid>\n\t -->"

/***/ }),

/***/ "./src/app/task/task.page.scss":
/*!*************************************!*\
  !*** ./src/app/task/task.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  width: 100%;\n  height: 90%; }\n\n.task-fab {\n  position: fixed;\n  right: 45px;\n  bottom: 15px;\n  --background: var(--ion-color-secondary); }\n\n@media (max-width: 599px) {\n    .task-fab {\n      right: 0px;\n      bottom: 5px; } }\n\n.newtask-container {\n  max-width: 320px;\n  position: absolute;\n  right: 25px;\n  bottom: 85px; }\n\n.task-container {\n  min-height: 120px; }\n\n.taskCard {\n  padding: 16px;\n  font-size: 18px; }\n\n#do {\n  min-height: 80px;\n  border: 1px solid var(--ion-color-primary); }\n\n#doing {\n  min-height: 80px;\n  border: 1px solid var(--ion-color-primary); }\n\n#done {\n  min-height: 80px;\n  border: 1px solid var(--ion-color-primary); }\n\n.filler {\n  padding: 20px; }\n\n.task-card {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-light); }\n\nion-tab-bar ion-button {\n  --background: var(--ion-color-medium); }\n\n.tasks-group {\n  flex-grow: 1;\n  height: 100%;\n  padding-top: 40px; }\n\n.task-header {\n  --background: var(--yellow);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--ion-color-light);\n  padding: 0;\n  padding-left: 16px; }\n\n@media (max-width: 599px) {\n    .task-header {\n      padding-left: 8px; } }\n\n.task-edit-btn {\n  font-size: 44px;\n  color: var(--ion-color-light); }\n\n.task-content {\n  background: var(--ion-color-dark);\n  color: var(--ion-color-light);\n  padding-top: 12px; }\n\n@media (max-width: 599px) {\n    .task-content {\n      padding-top: 8px;\n      padding: 8px; } }\n\n.task-content * {\n  color: var(--ion-color-light); }\n\n.task-name {\n  --color: var(--ion-color-dark);\n  font-size: 18px;\n  font-weight: bold; }\n\n@media (max-width: 599px) {\n    .task-name {\n      font-size: 12px; } }\n\n.task-status {\n  --background: var(--ion-color-dark); }\n\n@media (max-width: 599px) {\n    .task-status {\n      padding-top: 10px; } }\n\n.task-progress {\n  --background: transparent; }\n\n.task-progress.red {\n  --progress-background: var(--red); }\n\n.task-progress.yellow {\n  --progress-background: var(--yellow); }\n\n.task-progress.green {\n  --progress-background: var(--green); }\n\n.tab-bar-icon {\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  /*margin-right: 15px;*/\n  margin-top: 8px;\n  cursor: pointer; }\n\n@media (max-width: 599px) {\n    .tab-bar-icon {\n      width: 10px;\n      height: 11px; } }\n\n.action-row ion-button.red-bg {\n  --background: var(--red); }\n\n.action-row ion-button.yellow-bg {\n  --background: var(--yellow); }\n\n.action-row ion-button.green-bg {\n  --background: var(--green); }\n\n.action-row ion-button.dark-bg {\n  --background: var(--ion-color-dark); }\n\n.status-bar-legend {\n  margin: 20px 0; }\n\n@media (max-width: 599px) {\n  .status-bar-legend span {\n    font-size: 10px;\n    padding: 2px 4px; } }\n\n.action-group {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  /* min-height: 300px; */\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  justify-content: space-between;\n  max-width: 410px;\n  z-index: 99; }\n\n@media (max-width: 599px) {\n    .action-group {\n      padding: 10px; } }\n\n.action-row {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; }\n\n.closed-list {\n  height: 45px; }\n\n@media (max-width: 599px) {\n    .closed-list {\n      height: 30px; } }\n\n.add-activity-btn button {\n  margin-left: 15px; }\n\n@media (max-width: 599px) {\n  .filter-btn {\n    font-size: 10px;\n    height: 20px; } }\n\n@media (max-width: 599px) {\n  .task-content ion-card-subtitle {\n    font-size: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9DOlxcVXNlcnNcXEpvblxcUHJvamVjdHNcXERMU1UtTkNDLTU2NzgtZnJlZWxhbmNlL3NyY1xcYXBwXFx0YXNrXFx0YXNrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFzay9DOlxcVXNlcnNcXEpvblxcUHJvamVjdHNcXERMU1UtTkNDLTU2NzgtZnJlZWxhbmNlL3NyY1xcYXBwXFxtb2JpbGVfbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBYSxFQUFBOztBQ0xYO0lEQ0o7TUFRSSxVQUFVO01BQ1YsV0FBVyxFQUFBLEVBRWQ7O0FBRUQ7RUFDQyxnQkFBZ0I7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBDQUEwQyxFQUFBOztBQUc1QztFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEMsRUFBQTs7QUFHNUM7RUFDRSxnQkFBZ0I7RUFDaEIsMENBQTBDLEVBQUE7O0FBRzVDO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usc0NBQWE7RUFDYiwrQkFBUSxFQUFBOztBQUdWO0VBQ0UscUNBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsMkJBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQ3ZFaEI7SURnRUo7TUFVSSxpQkFBaUIsRUFBQSxFQUdwQjs7QUFFRDtFQUNFLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLGlCQUFpQixFQUFBOztBQ3ZGZjtJRG9GSjtNQU9JLGdCQUFnQjtNQUNoQixZQUFZLEVBQUEsRUFFZjs7QUFFRDtFQUNFLDZCQUE2QixFQUFBOztBQUsvQjtFQUNFLDhCQUFRO0VBQ1IsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQ3pHZjtJRHNHSjtNQU1JLGVBQWUsRUFBQSxFQUVsQjs7QUFDRDtFQUNFLG1DQUFhLEVBQUE7O0FDaEhYO0lEK0dKO01BS0ksaUJBQWlCLEVBQUEsRUFFcEI7O0FBRUQ7RUFDRSx5QkFBYSxFQUFBOztBQUVmO0VBQ0UsaUNBQXNCLEVBQUE7O0FBRXhCO0VBQ0Usb0NBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsbUNBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsc0JBQUE7RUFDQSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQzNJYjtJRHFJSjtNQVVJLFdBQVc7TUFDWCxZQUFZLEVBQUEsRUFFZjs7QUFHRDtFQUNFLHdCQUFhLEVBQUE7O0FBR2Y7RUFDRSwyQkFBYSxFQUFBOztBQUdmO0VBQ0UsMEJBQWEsRUFBQTs7QUFHZjtFQUNFLG1DQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjLEVBQUE7O0FDdEtaO0VEeUtKO0lBR0ksZUFBZTtJQUNmLGdCQUFnQixFQUFBLEVBRW5COztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQUE7RUFDQSxjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVE7RUFDUiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUMzTFQ7SURpTEo7TUFhSSxhQUFhLEVBQUEsRUFFaEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBRXRCLGdCQUFnQixFQUFBOztBQUlsQjtFQUNFLFlBQVksRUFBQTs7QUMzTVY7SUQwTUo7TUFJSSxZQUFZLEVBQUEsRUFFZjs7QUFFRDtFQUNFLGlCQUFpQixFQUFBOztBQ25OZjtFRHNOSjtJQUVJLGVBQWU7SUFDZixZQUFZLEVBQUEsRUFFZjs7QUMzTkc7RUQ4Tko7SUFHSSxlQUFlLEVBQUEsRUFFbEIiLCJmaWxlIjoic3JjL2FwcC90YXNrL3Rhc2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbW9iaWxlX21peGluJztcclxuXHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi50YXNrLWZhYntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDQ1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblxyXG5cclxuICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubmV3dGFzay1jb250YWluZXJ7XHJcblx0bWF4LXdpZHRoOiAzMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgYm90dG9tOiA4NXB4O1xyXG59XHJcblxyXG4udGFzay1jb250YWluZXJ7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi50YXNrQ2FyZHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2Rve1xyXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4jZG9pbmd7XHJcbiAgbWluLWhlaWdodDogODBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbiNkb25le1xyXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZmlsbGVye1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrLWNhcmR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuaW9uLXRhYi1iYXIgaW9uLWJ1dHRvbntcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcblxyXG4udGFza3MtZ3JvdXB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLnRhc2staGVhZGVye1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0teWVsbG93KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5cclxuICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICB9XHJcblxyXG59IFxyXG5cclxuLnRhc2stZWRpdC1idG57XHJcbiAgZm9udC1zaXplOiA0NHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG4udGFzay1jb250ZW50e1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuXHJcblxyXG4gIEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGFzay1jb250ZW50ICp7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblxyXG5cclxufVxyXG5cclxuLnRhc2stbmFtZXtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcbi50YXNrLXN0YXR1c3tcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuXHJcblxyXG4gIEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRhc2stcHJvZ3Jlc3N7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4udGFzay1wcm9ncmVzcy5yZWR7XHJcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG59XHJcbi50YXNrLXByb2dyZXNzLnllbGxvd3tcclxuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHZhcigtLXllbGxvdyk7XHJcbn1cclxuLnRhc2stcHJvZ3Jlc3MuZ3JlZW57XHJcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XHJcbn1cclxuXHJcbi50YWItYmFyLWljb257XHJcbiAgd2lkdGg6MThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAvKm1hcmdpbi1yaWdodDogMTVweDsqL1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cclxuICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTFweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uYWN0aW9uLXJvdyBpb24tYnV0dG9uLnJlZC1iZ3tcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXJlZCk7XHJcbn1cclxuXHJcbi5hY3Rpb24tcm93IGlvbi1idXR0b24ueWVsbG93LWJne1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0teWVsbG93KTtcclxufVxyXG5cclxuLmFjdGlvbi1yb3cgaW9uLWJ1dHRvbi5ncmVlbi1iZ3tcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcclxufVxyXG5cclxuLmFjdGlvbi1yb3cgaW9uLWJ1dHRvbi5kYXJrLWJne1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4uc3RhdHVzLWJhci1sZWdlbmR7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFyLWxlZ2VuZCBzcGFue1xyXG5cclxuICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1ncm91cHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDMwMHB4OyAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1heC13aWR0aDogNDEwcHg7XHJcbiAgei1pbmRleDogOTk7XHJcblxyXG4gIEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLXJvd3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG4uY2xvc2VkLWxpc3R7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG5cclxuICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLWFjdGl2aXR5LWJ0biBidXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYnRue1xyXG4gIEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGFzay1jb250ZW50IGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIFxyXG4gIEBpbmNsdWRlIGZvci1zaXplKHBob25lLW9ubHkpIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn0iLCJAbWl4aW4gZm9yLXNpemUoJHJhbmdlKSB7XHJcbiAgJHBob25lLXVwcGVyLWJvdW5kYXJ5OiA2MDBweDtcclxuICAkdGFibGV0LXBvcnRyYWl0LXVwcGVyLWJvdW5kYXJ5OiA5MDBweDtcclxuICAkdGFibGV0LWxhbmRzY2FwZS11cHBlci1ib3VuZGFyeTogMTIwMHB4O1xyXG4gICRkZXNrdG9wLXVwcGVyLWJvdW5kYXJ5OiAxODAwcHg7XHJcblxyXG4gIEBpZiAkcmFuZ2UgPT0gcGhvbmUtb25seSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3skcGhvbmUtdXBwZXItYm91bmRhcnkgLSAxfSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IHRhYmxldC1wb3J0cmFpdC11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHBob25lLXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gdGFibGV0LWxhbmRzY2FwZS11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldC1wb3J0cmFpdC11cHBlci1ib3VuZGFyeSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IGRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQtbGFuZHNjYXBlLXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gYmlnLWRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wLXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG59Il19 */"

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
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals_task_modal_task_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/task-modal/task-modal.page */ "./src/app/modals/task-modal/task-modal.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_app_objects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/app-objects */ "./src/models/app-objects.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
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












var TaskPage = /** @class */ (function () {
    function TaskPage(taskService, modalController, afs, storage, dragulaService, toastController, searchService, authService) {
        var _this = this;
        this.taskService = taskService;
        this.modalController = modalController;
        this.afs = afs;
        this.storage = storage;
        this.dragulaService = dragulaService;
        this.toastController = toastController;
        this.searchService = searchService;
        this.authService = authService;
        this.showAddTaskView = false;
        this.statusFilter = 'showall';
        this.selectedDepartment = 'showall';
        this.selectedOrder = 'date_asc';
        this.filters = [
            { name: 'SHOW ALL', value: 'showall' },
            { name: 'To-do', value: 'todo' },
            { name: 'Doing', value: 'doing' },
            { name: 'Done', value: 'done' }
        ];
        this.departments = [
            { name: 'SHOW ALL', value: 'showall' },
            { name: 'Operations', value: 'operations' },
            { name: 'Marketing', value: 'marketing' },
            { name: 'Camps', value: 'camps' }
        ];
        this.orders = [
            { name: 'Date', value: 'date_asc', icon: 'arrow-round-up' },
            { name: 'Date', value: 'date_desc', icon: 'arrow-round-down' },
            { name: 'A-Z', value: 'alphabet_asc', icon: 'arrow-round-down' },
            { name: 'A-Z', value: 'alphabet_desc', icon: 'arrow-round-up' }
        ];
        this.dragulaService.dropModel('drag-tasks')
            .subscribe(function (_a) {
            var item = _a.item;
            _this.prevDragged = item;
        });
        var drake = this.dragulaService.createGroup('drag-tasks', {
            revertOnSpill: true
        }).drake;
        this.storage.get('department').then(function (res) {
            // this.selectedDepartment = res || 'marketing'
        });
    }
    TaskPage.prototype.onChangeDrag = function (evt, status) {
        var _this = this;
        console.log('-onChangeDrag', status);
        var tasksLength;
        if (this.prevDragged.status == status)
            return;
        setTimeout(function (res) {
            var prevDrag = _this.prevDragged;
            prevDrag.status = status;
            _this.taskService.updateTask(prevDrag, _this.authService.user);
        }, 1);
    };
    TaskPage.prototype.ngOnInit = function () {
    };
    TaskPage.prototype.switchTab = function (tab) {
        this.storage.set('department', tab);
        // this.selectedDepartment = tab;
    };
    // onClickAddTask(evt){
    //   this.showAddTaskView = !this.showAddTaskView
    //   this.createNewTask(this.addTaskName, this.department)
    // }
    TaskPage.prototype.onClickAddTask = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[onClickTask]');
                        return [4 /*yield*/, this.modalController.create({
                                component: _modals_task_modal_task_modal_page__WEBPACK_IMPORTED_MODULE_3__["TaskModalPage"],
                                componentProps: {
                                    task: new _models_app_objects__WEBPACK_IMPORTED_MODULE_9__["Task"]('New Task Title', this.selectedDepartment),
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
    TaskPage.prototype.onClickTask = function (evt, task) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[onClickTask]', task);
                        return [4 /*yield*/, this.modalController.create({
                                component: _modals_task_modal_task_modal_page__WEBPACK_IMPORTED_MODULE_3__["TaskModalPage"],
                                componentProps: { task: task }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskPage.prototype.addTask = function () {
        this.showAddTaskView = !this.showAddTaskView;
    };
    TaskPage.prototype.selectStatusFilter = function (statusFilter) {
        if (jquery__WEBPACK_IMPORTED_MODULE_10__('#filter-row').hasClass('closed-list')) {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#filter-row').removeClass('closed-list');
        }
        else {
            this.statusFilter = statusFilter;
            this.filters.sort(function (x, y) { return x.value == statusFilter ? -1 : y.value == statusFilter ? 1 : 0; });
            jquery__WEBPACK_IMPORTED_MODULE_10__('#filter-row').addClass('closed-list');
        }
        // this.taskService.filterTasks(this.filter)
    };
    TaskPage.prototype.selectDepartment = function (selectedDepartment) {
        if (jquery__WEBPACK_IMPORTED_MODULE_10__('#department-row').hasClass('closed-list')) {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#department-row').removeClass('closed-list');
        }
        else {
            this.selectedDepartment = selectedDepartment;
            this.departments.sort(function (x, y) { return x.value == selectedDepartment ? -1 : y.value == selectedDepartment ? 1 : 0; });
            jquery__WEBPACK_IMPORTED_MODULE_10__('#department-row').addClass('closed-list');
        }
    };
    TaskPage.prototype.selectOrder = function (selectedOrder) {
        if (jquery__WEBPACK_IMPORTED_MODULE_10__('#order-row').hasClass('closed-list')) {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#order-row').removeClass('closed-list');
        }
        else {
            this.selectedOrder = selectedOrder;
            this.taskService.orderTasks(this.selectedOrder);
            this.orders.sort(function (x, y) { return x.value == selectedOrder ? -1 : y.value == selectedOrder ? 1 : 0; });
            jquery__WEBPACK_IMPORTED_MODULE_10__('#order-row').addClass('closed-list');
        }
    };
    TaskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.page.html */ "./src/app/task/task.page.html"),
            styles: [__webpack_require__(/*! ./task.page.scss */ "./src/app/task/task.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], TaskPage);
    return TaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=task-task-module.js.map