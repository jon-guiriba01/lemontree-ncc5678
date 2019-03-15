(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-cabinet-file-cabinet-module"],{

/***/ "./src/app/file-cabinet/file-cabinet.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/file-cabinet/file-cabinet.module.ts ***!
  \*****************************************************/
/*! exports provided: FileCabinetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCabinetPageModule", function() { return FileCabinetPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _file_cabinet_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-cabinet.page */ "./src/app/file-cabinet/file-cabinet.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _file_cabinet_page__WEBPACK_IMPORTED_MODULE_5__["FileCabinetPage"]
    }
];
var FileCabinetPageModule = /** @class */ (function () {
    function FileCabinetPageModule() {
    }
    FileCabinetPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_file_cabinet_page__WEBPACK_IMPORTED_MODULE_5__["FileCabinetPage"]]
        })
    ], FileCabinetPageModule);
    return FileCabinetPageModule;
}());



/***/ }),

/***/ "./src/app/file-cabinet/file-cabinet.page.html":
/*!*****************************************************!*\
  !*** ./src/app/file-cabinet/file-cabinet.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding style='position: relative;'>\n\n\t<ion-row>\n\t\t<ion-item class='filter-row' lines='none'>\n\t\t\t<img class='filter-icon' src='assets/imgs/settings_icon.png'/>\n\t\t\t<label>Filter</label>\n\n\t\t\t<ion-select class='filter-select' [(ngModel)]=\"selectedDepartment\" (ionChange)='filterDownloadListByGroup()'>\n\t\t\t  <ion-select-option *ngFor='let group of groups' value=\"{{group}}\">{{group | uppercase}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t</ion-row>\n\n\t<ion-list>\n\t\t<div *ngFor=\"let file of storageService.files\">\n\t\t\t<ion-item *ngIf='( \n\t\t\t\tfile.name.toLowerCase().includes(searchService.searchInput.toLowerCase()\n\t\t\t\t) || searchService.searchInput == \"\" \n\t\t\t) \n\t\t\t&& (\n\t\t\tselectedDepartment == \"showall\" || selectedDepartment == file.group) '>\n\t\t\t\n\t\t\t  <ion-label>{{file.name}}</ion-label>\n\t\t\t  <ion-button (click)='onClickDownload(file, $event)' class='download-btn'>\n\t\t\t  \t<ion-icon name='download'></ion-icon>\n\t\t\t  </ion-button>\n\t\t\t  <ion-button (click)='onClickDelete(file, $event)' class='delete-btn'>\n\t\t\t  \t<ion-icon name='close'></ion-icon>\n\t\t\t  </ion-button>\n\t\t\t</ion-item>\n\t\t</div>\n\t</ion-list>\n\n\n  <ion-fab-button size=\"small\" class=\"upload-fab\" (click)=\"upload()\">\n  \t<input type=\"file\" name=\"\" style='display: none;' class='hidden-input'/>\n  \t<ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/file-cabinet/file-cabinet.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/file-cabinet/file-cabinet.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-fab {\n  position: fixed;\n  right: 45px;\n  bottom: 15px;\n  --background: var(--ion-color-secondary); }\n  @media (max-width: 599px) {\n    .upload-fab {\n      right: 0px;\n      bottom: 5px; } }\n  .download-btn {\n  --background: var(--green); }\n  .delete-btn {\n  --background: var(--red); }\n  .filter-row {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 18px; }\n  .filter-select {\n  background: var(--blue);\n  color: var(--ion-color-light);\n  margin-left: 16px;\n  min-width: 140px; }\n  @media (max-width: 599px) {\n    .filter-select {\n      height: 25px;\n      font-size: 12px;\n      padding: 4px 4px 4px 8px; } }\n  .filter-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1jYWJpbmV0L0M6XFxVc2Vyc1xcSm9uXFxQcm9qZWN0c1xcRExTVS1OQ0MtNTY3OC1mcmVlbGFuY2Uvc3JjXFxhcHBcXGZpbGUtY2FiaW5ldFxcZmlsZS1jYWJpbmV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlsZS1jYWJpbmV0L0M6XFxVc2Vyc1xcSm9uXFxQcm9qZWN0c1xcRExTVS1OQ0MtNTY3OC1mcmVlbGFuY2Uvc3JjXFxhcHBcXG1vYmlsZV9taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQWEsRUFBQTtFQ0NYO0lETEo7TUFPSSxVQUFVO01BQ1YsV0FBVyxFQUFBLEVBRWQ7RUFFRDtFQUNDLDBCQUFhLEVBQUE7RUFHZDtFQUNDLHdCQUFhLEVBQUE7RUFHZDtFQUNDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0VBSXBCO0VBQ0MsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7RUMzQmI7SUR1Qko7TUFRRSxZQUFZO01BQ1osZUFBZTtNQUNmLHdCQUF3QixFQUFBLEVBRXpCO0VBRUQ7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmlsZS1jYWJpbmV0L2ZpbGUtY2FiaW5ldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9tb2JpbGVfbWl4aW4nO1xyXG5cclxuLnVwbG9hZC1mYWJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiA0NXB4O1xyXG4gIGJvdHRvbTogMTVweDtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5cclxuICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZG93bmxvYWQtYnRue1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0bntcclxuXHQtLWJhY2tncm91bmQ6IHZhcigtLXJlZCk7XHJcbn1cclxuXHJcbi5maWx0ZXItcm93e1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbn1cclxuXHJcbi5maWx0ZXItc2VsZWN0e1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xyXG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cdG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG5cdG1pbi13aWR0aDogMTQwcHg7XHJcblxyXG5cclxuICBAaW5jbHVkZSBmb3Itc2l6ZShwaG9uZS1vbmx5KSB7XHJcblx0XHRoZWlnaHQ6IDI1cHg7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRwYWRkaW5nOiA0cHggNHB4IDRweCA4cHg7XHJcblx0ICB9XHJcbn1cclxuXHJcbi5maWx0ZXItaWNvbntcclxuXHR3aWR0aDogMThweDtcclxuXHRoZWlnaHQ6IDE4cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn0iLCJAbWl4aW4gZm9yLXNpemUoJHJhbmdlKSB7XHJcbiAgJHBob25lLXVwcGVyLWJvdW5kYXJ5OiA2MDBweDtcclxuICAkdGFibGV0LXBvcnRyYWl0LXVwcGVyLWJvdW5kYXJ5OiA5MDBweDtcclxuICAkdGFibGV0LWxhbmRzY2FwZS11cHBlci1ib3VuZGFyeTogMTIwMHB4O1xyXG4gICRkZXNrdG9wLXVwcGVyLWJvdW5kYXJ5OiAxODAwcHg7XHJcblxyXG4gIEBpZiAkcmFuZ2UgPT0gcGhvbmUtb25seSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3skcGhvbmUtdXBwZXItYm91bmRhcnkgLSAxfSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IHRhYmxldC1wb3J0cmFpdC11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHBob25lLXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gdGFibGV0LWxhbmRzY2FwZS11cCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldC1wb3J0cmFpdC11cHBlci1ib3VuZGFyeSkgeyBAY29udGVudDsgfVxyXG4gIH0gQGVsc2UgaWYgJHJhbmdlID09IGRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQtbGFuZHNjYXBlLXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfSBAZWxzZSBpZiAkcmFuZ2UgPT0gYmlnLWRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wLXVwcGVyLWJvdW5kYXJ5KSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/file-cabinet/file-cabinet.page.ts":
/*!***************************************************!*\
  !*** ./src/app/file-cabinet/file-cabinet.page.ts ***!
  \***************************************************/
/*! exports provided: FileCabinetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCabinetPage", function() { return FileCabinetPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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








var FileCabinetPage = /** @class */ (function () {
    function FileCabinetPage(authService, afStorage, storageService, searchService, alertController) {
        this.authService = authService;
        this.afStorage = afStorage;
        this.storageService = storageService;
        this.searchService = searchService;
        this.alertController = alertController;
        this.groups = [
            'admin',
            'operations',
            'marketing',
            'camps',
            'showall'
        ];
        this.selectedDepartment = 'showall';
        this.files = [];
        this.loadGapi().then(function (res) {
            console.log(res);
        });
    }
    FileCabinetPage.prototype.ngOnInit = function () {
    };
    FileCabinetPage.prototype.upload = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_5__('.hidden-input').click();
        jquery__WEBPACK_IMPORTED_MODULE_5__('.hidden-input').change(function (e) {
            e.stopImmediatePropagation();
            var file = e.target.files[0];
            console.log('The file "' + file.name + '" has been selected.');
            _this.storageService.uploadFile(file, _this.selectedDepartment);
        });
    };
    FileCabinetPage.prototype.loadGapi = function () {
        return new Promise(function (resolve, reject) {
            gapi.load('client:auth2', function (_) {
                gapi.client.init({
                    'apiKey': _config__WEBPACK_IMPORTED_MODULE_1__["google"].apikey,
                    'clientId': _config__WEBPACK_IMPORTED_MODULE_1__["google"].webClientId,
                    'scope': 'https://www.googleapis.com/auth/drive',
                    'discoveryDocs': [
                        'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
                        'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
                    ]
                }).then(function () {
                    resolve(gapi);
                    var gAuth = gapi.auth2.getAuthInstance();
                    console.log('gAuth', gAuth);
                    console.log('gapi', gapi);
                    var test = gapi.client.drive.files.list();
                    console.log("test ", test);
                    // Listen for sign-in state changes.
                    gAuth.isSignedIn.listen(function (res) {
                        console.log('listen gapi', res);
                    });
                });
            });
        });
    };
    FileCabinetPage.prototype.onClickDownload = function (file, event) {
        this.storageService.downloadFile(file);
    };
    FileCabinetPage.prototype.onClickDelete = function (file, event) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'File Delete',
                            message: 'Are you sure <strong>delete</strong>!!!',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.storageService.deleteFile(file);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileCabinetPage.prototype.filterDownloadListByGroup = function () {
    };
    FileCabinetPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-cabinet',
            template: __webpack_require__(/*! ./file-cabinet.page.html */ "./src/app/file-cabinet/file-cabinet.page.html"),
            styles: [__webpack_require__(/*! ./file-cabinet.page.scss */ "./src/app/file-cabinet/file-cabinet.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], FileCabinetPage);
    return FileCabinetPage;
}());



/***/ })

}]);
//# sourceMappingURL=file-cabinet-file-cabinet-module.js.map