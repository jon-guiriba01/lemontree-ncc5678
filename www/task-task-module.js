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

module.exports = "<ion-content padding style=\"padding-top: 30px;\" forceOverscroll=\"false\">\n\t<div class=\"main-container\">\n\t\t<div class=\"action-group\">\n\t\t\t<div class='action-row'>\n\t\t\t\t<img class='tab-bar-icon' src='assets/imgs/settings_icon.png'/>\n\t\t\t  <ion-button\n\t  \t\t\t[ngClass]=\"[filter=='todo' ? 'yellow-bg' : '']\"\n\t  \t\t\t(click)=\"filterTasks('todo')\"\n  \t\t\t>\n\t\t\t    <ion-label>To-do</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[filter=='doing' ? 'yellow-bg' : '']\"\n  \t\t\t\t(click)=\"filterTasks('doing')\"\n\t\t\t  >\n\t\t\t    <ion-label>Doing</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[filter=='done' ? 'yellow-bg' : '']\"\n  \t\t\t\t(click)=\"filterTasks('done')\"\n\t\t\t  >\n\t\t\t    <ion-label>Done</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[filter=='showall' ? 'yellow-bg' : '']\"\n  \t\t\t\t(click)=\"filterTasks('showall')\"\n\t\t\t  >\n\t\t\t    <ion-label>SHOW ALL</ion-label>\n\t\t\t  </ion-button>\n\t\t\t</div>\n\n\t\t\t<div class='action-row'>\n\t\t\t\t<img class='tab-bar-icon' src='assets/imgs/sort_icon.png'/>\n \n \t\t\t  <ion-button \n \t  \t\t\t[ngClass]=\"[selectedDepartment=='admin' ? 'dark-bg' : '']\"\n   \t\t\t\t(click)=\"selectDepartment('admin')\"\n \t\t\t  >\n\t\t\t    <ion-label>Admin</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t \n \t\t\t  <ion-button \n \t  \t\t\t[ngClass]=\"[selectedDepartment=='operations' ? 'dark-bg' : '']\"\n   \t\t\t\t(click)=\"selectDepartment('operations')\"\n \t\t\t  >\t\t\n\t\t\t    <ion-label>Operations</ion-label>\n\t\t\t  </ion-button>\n\t\t\t  \n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[selectedDepartment=='marketing' ? 'dark-bg' : '']\"\n  \t\t\t\t(click)=\"selectDepartment('marketing')\"\n\t\t\t  >\n\t\t\t    <ion-label>Marketing</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[selectedDepartment=='camps' ? 'dark-bg' : '']\"\n  \t\t\t\t(click)=\"selectDepartment('camps')\"\n\t\t\t  >\n\t\t\t    <ion-label>Camps</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[selectedDepartment=='showall' ? 'dark-bg' : '']\"\n  \t\t\t\t(click)=\"selectDepartment('showall')\"\n\t\t\t  >\n\t\t\t    <ion-label>SHOW ALL</ion-label>\n\t\t\t  </ion-button>\n\t\t\t</div>\n\n\t\t\t<div class='action-row'>\n\t\t\t\t<img class='tab-bar-icon' src='assets/imgs/sort2_icon.png'/>\n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[selectedOrder=='date_asc' ? 'dark-bg' : '']\"\n  \t\t\t\t(click)=\"selectOrder('date_asc')\"\n\t\t\t  >\n\t\t\t  \t<ion-icon name=\"arrow-round-up\"></ion-icon>\n\t\t\t    <ion-label>Date</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[selectedOrder=='date_desc' ? 'dark-bg' : '']\"\n  \t\t\t\t(click)=\"selectOrder('date_desc')\"\n\t\t\t  >\n\t\t\t  \t<ion-icon name=\"arrow-round-down\"></ion-icon>\n\t\t\t    <ion-label>Date</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[selectedOrder=='alphabet_asc' ? 'dark-bg' : '']\"\n  \t\t\t\t(click)=\"selectOrder('alphabet_asc')\"\n\t\t\t  >\n\t\t\t  \t<ion-icon name=\"arrow-round-up\"></ion-icon>\n\t\t\t    <ion-label>A-Z</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t  <ion-button \n\t  \t\t\t[ngClass]=\"[selectedOrder=='alphabet_desc' ? 'dark-bg' : '']\"\n  \t\t\t\t(click)=\"selectOrder('alphabet_desc')\"\n\t\t\t  >\n\t\t\t  \t<ion-icon name=\"arrow-round-down\"></ion-icon>\n\t\t\t    <ion-label>A-Z</ion-label>\n\t\t\t  </ion-button>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"tasks-group\">\n\n\t\t\t<div class=\"status-bar-legend\">\n\t\t\t\tStatus Bar Legend: <span class='red-bg' >0-50%</span> <span class='yellow-bg'>51-99%</span> <span class='green-bg'>100%</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<ion-card *ngFor='let task of taskService.tasks'>\n\t\t\t  <ion-card-header class='task-header'>\n\t\t\t    <ion-card-title class='task-name'>\n\t\t\t    \t{{task.name}}\n\t\t\t    </ion-card-title>\n\n\t\t\t    <ion-button fill='clear' (click)='onClickTask($event, task)'>\n\t\t\t    \t<ion-icon name='arrow-dropright' class='task-edit-btn'></ion-icon>\n\t\t\t    </ion-button>\n\t\t\t  </ion-card-header>\n\t\t\t\n\t\t\t  <ion-card-content class='task-content'>\n\t\t\t    <ion-card-subtitle><b>DEADLINE:</b> {{task.deadline}}</ion-card-subtitle>\n\t\t\t    <ion-card-subtitle><b>ADDED BY:</b> {{task.author}}</ion-card-subtitle>\n\t\t\t    <ion-card-subtitle><b>IN-CHARGE:</b> {{task.group}}</ion-card-subtitle>\n\t\t\t  \t<div class='task-status'>\n\t\t\t  \t\t<h4>STATUS</h4>\n\t\t\t  \t\t<div class=\"progress-bar-row\">\n\t\t\t  \t\t\t<ion-progress-bar \n\t\t\t\t  \t\t\tstyle='height: 20px;' \n\t\t\t\t  \t\t\tclass=\"task-progress\"\n\t\t\t\t  \t\t\t[ngClass]=\"\n\t\t\t\t  \t\t\t[\n\t\t\t\t  \t\t\t\ttask.progress <= 0.5 ? 'red' : '', \n\t\t\t\t  \t\t\t\ttask.progress > 0.5 ? 'yellow' : '', \n\t\t\t\t  \t\t\t\ttask.progress == 1 ? 'green' : '' \n\t\t\t\t  \t\t\t]\n\t\t\t\t  \t\t\t\"\n\t\t\t\t  \t\t\tvalue=\"{{task.progress}}\"></ion-progress-bar>\n\t\t\t  \t\t</div>\n\t\t\t  \t</div>\n\t\t\t  </ion-card-content>\n\t\t\t</ion-card>\t\t\t\n\t\t</div>\n\n\t</div>\n\n\t<ion-card class=\"newtask-container\" *ngIf=\"showAddTaskView\">\n\t\t<ion-card-content>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"addTaskName\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<div style=\"display: flex; justify-content: flex-end;\">\n\t\t\t\t<ion-button (click)='onClickAddTask($event)'>Add Task</ion-button>\n\t\t\t</div>\n\t\t</ion-card-content>\n\t</ion-card>\n\n  <ion-fab-button size=\"small\" class=\"task-fab\" (click)='onClickAddTask($event)'>\n  \t<ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-content>\n\n\t<!-- \n\t<ion-grid>\n\t  <ion-row no-padding class=\"matrix\">\n\t    <ion-col class='task-container' size=\"12\">\n\t      <ion-item class=\"task-header\">Do</ion-item>\n\t      <ion-list \n\t      dragula=\"drag-tasks\" \n\t      [(dragulaModel)]=\"taskService.todo\" \n\t      (dragulaModelChange)=\"onChangeDrag($event, 'todo')\"\n\t      lines=\"none\">\n        \t<div *ngFor=\"let task of taskService.todo\">\n\t\t        <ion-item \n\t\t        [color]=\"primary\" \n\t\t        expand=\"block\" \n\t\t        text-wrap \n\t\t        class='task-card'\n\t\t        *ngIf='task.group==department'\n\t\t        (click)='onClickTask($event, task)'\n\t\t        >\n\t\t          \t{{ task.name }}\n\t\t        </ion-item>\n        \t</div>\n\t      </ion-list>\n\t    </ion-col>\n\t\n\t    <ion-col class='task-container'  size=\"12\">\n\n\t      <ion-item class=\"task-header\">Doing</ion-item>\n\n\t      <ion-list \n\t      dragula=\"drag-tasks\" \n\t      [(dragulaModel)]=\"taskService.doing\" \n\t      (dragulaModelChange)=\"onChangeDrag($event, 'doing')\"\n\t      lines=\"none\">\n        \t<div *ngFor=\"let task of taskService.doing\">\n\t\t        <ion-item \n\t\t        [color]=\"primary\" \n\t\t        expand=\"block\" \n\t\t        text-wrap \n\t\t        class='task-card'\n\t\t        *ngIf='task.group==department'\n\t\t        (click)='onClickTask($event, task)'\n\t\t        >\n\t\t          \t{{ task.name }}\n\t\t        </ion-item>\n        \t</div>\n\t      </ion-list>\n\t    </ion-col>\n\t\n\t    <ion-col class='task-container' size=\"12\">\n\t      <ion-item class=\"task-header\">Done</ion-item>\n\n\t      <ion-list \n\t      dragula=\"drag-tasks\" \n\t      [(dragulaModel)]=\"taskService.done\" \n\t      (dragulaModelChange)=\"onChangeDrag($event, 'done')\"\n\t      lines=\"none\">\n        \t<div *ngFor=\"let task of taskService.done\">\n\t\t        <ion-item \n\t\t        [color]=\"primary\" \n\t\t        expand=\"block\" \n\t\t        text-wrap \n\t\t        class='task-card'\n\t\t        *ngIf='task.group==department'\n\t\t        (click)='onClickTask($event, task)'\n\t\t        >\n\t\t          \t{{ task.name }}\n\t\t        </ion-item>\n        \t</div>\n\t      </ion-list>\n\t    </ion-col>\n\n\t     </ion-row>\n\t   </ion-grid>\n\t -->"

/***/ }),

/***/ "./src/app/task/task.page.scss":
/*!*************************************!*\
  !*** ./src/app/task/task.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  width: 100%;\n  height: 90%; }\n\n.task-fab {\n  position: fixed;\n  right: 45px;\n  --background: var(--ion-color-secondary); }\n\n.newtask-container {\n  max-width: 320px;\n  position: absolute;\n  right: 25px;\n  bottom: 85px; }\n\n.task-container {\n  min-height: 120px; }\n\n.taskCard {\n  padding: 16px;\n  font-size: 18px; }\n\n#do {\n  min-height: 80px;\n  border: 1px solid var(--ion-color-primary); }\n\n#doing {\n  min-height: 80px;\n  border: 1px solid var(--ion-color-primary); }\n\n#done {\n  min-height: 80px;\n  border: 1px solid var(--ion-color-primary); }\n\n.filler {\n  padding: 20px; }\n\n.task-card {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-light); }\n\nion-tab-bar ion-button {\n  --background: var(--ion-color-medium); }\n\n.tasks-group {\n  flex-grow: 1;\n  height: 100%;\n  padding-top: 40px; }\n\n.task-header {\n  --background: var(--ion-color-medium-tint);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--ion-color-light);\n  padding: 0;\n  padding-left: 16px; }\n\n.task-edit-btn {\n  font-size: 22px;\n  color: var(--ion-color-light); }\n\n.task-content {\n  background: var(--ion-color-dark);\n  color: var(--ion-color-light);\n  padding-top: 12px; }\n\n.task-content * {\n  color: var(--ion-color-light); }\n\n.task-name {\n  --color: var(--ion-color-dark);\n  font-size: 16px; }\n\n.task-status {\n  --background: var(--ion-color-dark); }\n\n.task-progress {\n  --background: transparent; }\n\n.task-progress.red {\n  --progress-background: var(--red); }\n\n.task-progress.yellow {\n  --progress-background: var(--yellow); }\n\n.task-progress.green {\n  --progress-background: var(--green); }\n\n.tab-bar-icon {\n  width: 28px;\n  height: 28px;\n  vertical-align: middle;\n  margin-right: 15px; }\n\n.action-row ion-button.red-bg {\n  --background: var(--red); }\n\n.action-row ion-button.yellow-bg {\n  --background: var(--yellow); }\n\n.action-row ion-button.green-bg {\n  --background: var(--green); }\n\n.action-row ion-button.dark-bg {\n  --background: var(--ion-color-dark); }\n\n.status-bar-legend {\n  margin: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9DOlxcVXNlcnNcXEpvblxcUHJvamVjdHNcXERMU1UtTkNDLTU2NzgtZnJlZWxhbmNlL3NyY1xcYXBwXFx0YXNrXFx0YXNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHdDQUFhLEVBQUE7O0FBR2Y7RUFDQyxnQkFBZ0I7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBDQUEwQyxFQUFBOztBQUc1QztFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEMsRUFBQTs7QUFHNUM7RUFDRSxnQkFBZ0I7RUFDaEIsMENBQTBDLEVBQUE7O0FBRzVDO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usc0NBQWE7RUFDYiwrQkFBUSxFQUFBOztBQUdWO0VBQ0UscUNBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsMENBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUFRO0VBQ1IsZUFBZSxFQUFBOztBQUVqQjtFQUNFLG1DQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBYSxFQUFBOztBQUVmO0VBQ0UsaUNBQXNCLEVBQUE7O0FBRXhCO0VBQ0Usb0NBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsbUNBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0Usd0JBQWEsRUFBQTs7QUFHZjtFQUNFLDJCQUFhLEVBQUE7O0FBR2Y7RUFDRSwwQkFBYSxFQUFBOztBQUdmO0VBQ0UsbUNBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi50YXNrLWZhYntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDQ1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLm5ld3Rhc2stY29udGFpbmVye1xyXG5cdG1heC13aWR0aDogMzIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGJvdHRvbTogODVweDtcclxufVxyXG5cclxuLnRhc2stY29udGFpbmVye1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4udGFza0NhcmR7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNkb3tcclxuICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuI2RvaW5ne1xyXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4jZG9uZXtcclxuICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmZpbGxlcntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udGFzay1jYXJke1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbmlvbi10YWItYmFyIGlvbi1idXR0b257XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufVxyXG5cclxuLnRhc2tzLWdyb3Vwe1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi50YXNrLWhlYWRlcntcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxufSBcclxuXHJcbi50YXNrLWVkaXQtYnRue1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLnRhc2stY29udGVudHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRlbnQgKntcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLnRhc2stbmFtZXtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi50YXNrLXN0YXR1c3tcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLnRhc2stcHJvZ3Jlc3N7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4udGFzay1wcm9ncmVzcy5yZWR7XHJcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG59XHJcbi50YXNrLXByb2dyZXNzLnllbGxvd3tcclxuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHZhcigtLXllbGxvdyk7XHJcbn1cclxuLnRhc2stcHJvZ3Jlc3MuZ3JlZW57XHJcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XHJcbn1cclxuXHJcbi50YWItYmFyLWljb257XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5cclxuLmFjdGlvbi1yb3cgaW9uLWJ1dHRvbi5yZWQtYmd7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG59XHJcblxyXG4uYWN0aW9uLXJvdyBpb24tYnV0dG9uLnllbGxvdy1iZ3tcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXllbGxvdyk7XHJcbn1cclxuXHJcbi5hY3Rpb24tcm93IGlvbi1idXR0b24uZ3JlZW4tYmd7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XHJcbn1cclxuXHJcbi5hY3Rpb24tcm93IGlvbi1idXR0b24uZGFyay1iZ3tcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLnN0YXR1cy1iYXItbGVnZW5ke1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59Il19 */"

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
/* harmony import */ var _models_app_objects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/app-objects */ "./src/models/app-objects.ts");
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
    function TaskPage(taskService, modalController, afs, storage, dragulaService, toastController, searchService) {
        var _this = this;
        this.taskService = taskService;
        this.modalController = modalController;
        this.afs = afs;
        this.storage = storage;
        this.dragulaService = dragulaService;
        this.toastController = toastController;
        this.searchService = searchService;
        this.showAddTaskView = false;
        this.filter = 'showall';
        this.selectedDepartment = 'showall';
        this.selectedOrder = 'date_asc';
        this.dragulaService.dropModel('drag-tasks')
            .subscribe(function (_a) {
            var item = _a.item;
            _this.prevDragged = item;
        });
        var drake = this.dragulaService.createGroup('drag-tasks', {
            revertOnSpill: true
        }).drake;
        this.storage.get('department').then(function (res) {
            _this.selectedDepartment = res || 'marketing';
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
            _this.taskService.updateTask(prevDrag);
        }, 1);
    };
    TaskPage.prototype.ngOnInit = function () {
    };
    TaskPage.prototype.switchTab = function (tab) {
        this.storage.set('department', tab);
        this.selectedDepartment = tab;
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
                                    task: new _models_app_objects__WEBPACK_IMPORTED_MODULE_8__["Task"]('New Task Title', this.selectedDepartment),
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
    TaskPage.prototype.filterTasks = function (filter) {
        this.filter = filter;
    };
    TaskPage.prototype.selectDepartment = function (selectedDepartment) {
        this.selectedDepartment = selectedDepartment;
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
            _services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]])
    ], TaskPage);
    return TaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=task-task-module.js.map