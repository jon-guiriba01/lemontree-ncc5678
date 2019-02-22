(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test.page */ "./src/app/test/test.page.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_5__["TestPage"]
    }
];
var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaModule"]
            ],
            declarations: [_test_page__WEBPACK_IMPORTED_MODULE_5__["TestPage"]]
        })
    ], TestPageModule);
    return TestPageModule;
}());



/***/ }),

/***/ "./src/app/test/test.page.html":
/*!*************************************!*\
  !*** ./src/app/test/test.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Devdactic Eisenhower\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content forceOverscroll=\"false\">\n  <ion-grid>\n \n    <ion-row align-items-center>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"fixed\">New Todo:</ion-label>\n          <ion-input [(ngModel)]=\"todo.value\"></ion-input>\n        </ion-item>\n \n      </ion-col>\n \n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label>Quadrant:</ion-label>\n          <ion-select [(ngModel)]=\"selectedQuadrant\">\n            <ion-select-option value=\"q1\">Do</ion-select-option>\n            <ion-select-option value=\"q2\">Schedule</ion-select-option>\n            <ion-select-option value=\"q3\">Delegate</ion-select-option>\n            <ion-select-option value=\"q4\">Dont do</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n \n    </ion-row>\n \n    <ion-button expand=\"block\" fill=\"outline\" (click)=\"addTodo()\">\n      <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n      Add Todo\n    </ion-button>\n \n    <ion-row no-padding class=\"matrix\">\n      <ion-col size=\"6\" class=\"q1\">\n        <div class=\"q-header\">Do</div>\n        <ion-list dragula=\"bag\" [(dragulaModel)]=\"q1\" lines=\"none\">\n          <ion-item *ngFor=\"let item of q1\" [color]=\"item.color\" expand=\"block\" text-wrap>\n            {{ item.value }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n \n      <ion-col size=\"6\" class=\"q2\">\n        <div class=\"q-header\">Schedule</div>\n        <ion-list dragula=\"bag\" [(dragulaModel)]=\"q2\" lines=\"none\">\n          <ion-item *ngFor=\"let item of q2\" [color]=\"item.color\" expand=\"block\" text-wrap>\n            {{ item.value }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n \n      <ion-col size=\"6\" class=\"q3\">\n        <div class=\"q-header\">Delegate</div>\n        <ion-list dragula=\"bag\" [(dragulaModel)]=\"q3\" lines=\"none\">\n          <ion-item *ngFor=\"let item of q3\" [color]=\"item.color\" expand=\"block\" text-wrap>\n            {{ item.value }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n \n      <ion-col size=\"6\" class=\"q4\">\n        <div class=\"q-header\">Don't do</div>\n        <ion-list dragula=\"bag\" [(dragulaModel)]=\"q4\" lines=\"none\">\n          <ion-item *ngFor=\"let item of q4\" [color]=\"item.color\" expand=\"block\" text-wrap>\n            {{ item.value }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  <ion-row class=\"delete-area\" align-items-center justify-content-center>\n    <ion-icon name=\"trash\" color=\"medium\"></ion-icon>\n  </ion-row>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/test/test.page.scss":
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".q1, .q2, .q3, .q4 {\n  border: 4px solid #fff; }\n\n.matrix {\n  margin-top: 30px; }\n\n.matrix ion-col {\n    --ion-grid-column-padding: 0px;\n    min-height: 150px; }\n\n.matrix .list {\n    padding: 0px;\n    height: 100%; }\n\n.matrix ion-item {\n    margin-bottom: 2px; }\n\n.q-header {\n  background-color: var(--ion-color-light);\n  height: 20px;\n  text-align: center; }\n\n.delete-area {\n  border: 2px dashed var(--ion-color-medium);\n  margin: 10px;\n  height: 100px; }\n\n.delete-area ion-icon {\n    font-size: 64px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC9DOlxcVXNlcnNcXEpvblxcUHJvamVjdHNcXERMU1UtTkNDLTU2NzgtZnJlZWxhbmNlL3NyY1xcYXBwXFx0ZXN0XFx0ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUlRLDhCQUEwQjtJQUMxQixpQkFBaUIsRUFBQTs7QUFMekI7SUFTUSxZQUFZO0lBQ1osWUFBWSxFQUFBOztBQVZwQjtJQWNRLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMENBQTBDO0VBQzFDLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBSGpCO0lBS08sZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVzdC90ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xMSwgLnEyLCAucTMsIC5xNCB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xyXG59XHJcbiBcclxuLm1hdHJpeCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbiBcclxuICAgIC5saXN0IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgfVxyXG59XHJcbiBcclxuLnEtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIFxyXG4uZGVsZXRlLWFyZWEge1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/test/test.page.ts":
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestPage = /** @class */ (function () {
    function TestPage(dragulaService, toastController) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.toastController = toastController;
        this.q1 = [
            { value: 'Buy Milk', color: 'primary' },
            { value: 'Write new Post', color: 'primary' }
        ];
        this.q2 = [
            { value: 'Schedule newsletter', color: 'secondary' },
            { value: 'Find new Ionic Academy topics', color: 'secondary' }
        ];
        this.q3 = [
            { value: 'Improve page performance', color: 'tertiary' },
            { value: 'Clean the house', color: 'tertiary' }
        ];
        this.q4 = [
            { value: 'Unimportant things', color: 'warning' },
            { value: 'Watch Netflix', color: 'warning' }
        ];
        this.todo = { value: '', color: '' };
        this.selectedQuadrant = 'q1';
        this.dragulaService.drag('bag')
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, source = _a.source;
            el.setAttribute('color', 'danger');
        });
        this.dragulaService.removeModel('bag')
            .subscribe(function (_a) {
            var item = _a.item;
            _this.toastController.create({
                message: 'Removed: ' + item.value,
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
        this.dragulaService.dropModel('bag')
            .subscribe(function (_a) {
            var item = _a.item;
            item['color'] = 'success';
        });
        this.dragulaService.createGroup('bag', {
            removeOnSpill: true
        });
    }
    TestPage.prototype.addTodo = function () {
        switch (this.selectedQuadrant) {
            case 'q1':
                this.todo.color = 'primary';
                break;
            case 'q2':
                this.todo.color = 'secondary';
                break;
            case 'q3':
                this.todo.color = 'tertiary';
                break;
            case 'q4':
                this.todo.color = 'warning';
                break;
        }
        this[this.selectedQuadrant].push(this.todo);
        this.todo = { value: '', color: '' };
    };
    TestPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.page.html */ "./src/app/test/test.page.html"),
            styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/test/test.page.scss")]
        }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], TestPage);
    return TestPage;
}());



/***/ })

}]);
//# sourceMappingURL=test-test-module.js.map