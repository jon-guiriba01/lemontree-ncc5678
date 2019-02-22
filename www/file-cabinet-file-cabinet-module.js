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

module.exports = "<ion-content padding style='position: relative;'>\n\n\t<ion-row>\n\t\t<ion-item class='filter-row'>\n\t\t\t<img class='filter-icon' src='assets/imgs/settings_icon.png'/>\n\t\t\t<label>Filter</label>\n\n\t\t\t<ion-select class='filter-select' value=\"showall\" (ionChange)='filterDownloadListByGroup()'>\n\t\t\t  <ion-select-option *ngFor='let group of groups' value=\"{{group}}\">{{group | uppercase}}</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t</ion-row>\n\n\t<ion-list>\n\t\t<div *ngFor=\"let file of storageService.files\">\n\t\t\t<ion-item *ngIf='file.name.toLowerCase().includes(searchService.searchInput.toLowerCase()) || searchService.searchInput == \"\"'>\n\t\t\t  <ion-label>{{file.name}}</ion-label>\n\t\t\t  <ion-button (click)='onClickDownload(file, $event)' class='download-btn'>\n\t\t\t  \t<ion-icon name='download'></ion-icon>\n\t\t\t  </ion-button>\n\t\t\t  <ion-button (click)='onClickDelete(file, $event)' class='delete-btn'>\n\t\t\t  \t<ion-icon name='close'></ion-icon>\n\t\t\t  </ion-button>\n\t\t\t</ion-item>\n\t\t</div>\n\t</ion-list>\n\n\n  <ion-fab-button size=\"small\" class=\"upload-fab\" (click)=\"upload()\">\n  \t<input type=\"file\" name=\"\" style='display: none;' class='hidden-input'/>\n  \t<ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/file-cabinet/file-cabinet.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/file-cabinet/file-cabinet.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-fab {\n  position: fixed;\n  right: 45px;\n  bottom: 15px;\n  --background: var(--ion-color-secondary); }\n\n.download-btn {\n  --background: var(--green); }\n\n.delete-btn {\n  --background: var(--red); }\n\n.filter-row {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 18px; }\n\n.filter-select {\n  background: var(--blue);\n  color: var(--ion-color-light);\n  margin-left: 16px;\n  min-width: 140px; }\n\n.filter-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1jYWJpbmV0L0M6XFxVc2Vyc1xcSm9uXFxQcm9qZWN0c1xcRExTVS1OQ0MtNTY3OC1mcmVlbGFuY2Uvc3JjXFxhcHBcXGZpbGUtY2FiaW5ldFxcZmlsZS1jYWJpbmV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUFhLEVBQUE7O0FBSWY7RUFDQywwQkFBYSxFQUFBOztBQUdkO0VBQ0Msd0JBQWEsRUFBQTs7QUFHZDtFQUNDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUlwQjtFQUNDLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9maWxlLWNhYmluZXQvZmlsZS1jYWJpbmV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtZmFie1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogNDVweDtcclxuICBib3R0b206IDE1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHJcbn1cclxuXHJcbi5kb3dubG9hZC1idG57XHJcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRue1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcclxufVxyXG5cclxuLmZpbHRlci1yb3d7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxufVxyXG5cclxuLmZpbHRlci1zZWxlY3R7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XHJcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblx0bWFyZ2luLWxlZnQ6IDE2cHg7XHJcblx0bWluLXdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuLmZpbHRlci1pY29ue1xyXG5cdHdpZHRoOiAxOHB4O1xyXG5cdGhlaWdodDogMThweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxufSJdfQ== */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FileCabinetPage = /** @class */ (function () {
    function FileCabinetPage(authService, afStorage, storageService, searchService) {
        this.authService = authService;
        this.afStorage = afStorage;
        this.storageService = storageService;
        this.searchService = searchService;
        this.groups = [
            'admin',
            'operations',
            'marketing',
            'camps',
            'showall'
        ];
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
            _this.storageService.uploadFile(file);
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
        this.storageService.deleteFile(file);
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
            _services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]])
    ], FileCabinetPage);
    return FileCabinetPage;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var StorageService = /** @class */ (function () {
    function StorageService(afStorage, afs) {
        var _this = this;
        this.afStorage = afStorage;
        this.afs = afs;
        this.files = [];
        this.filesCollection = this.afs.collection('files');
        this.filesCollection.snapshotChanges().subscribe(function (dataSet) {
            var files = [];
            for (var _i = 0, dataSet_1 = dataSet; _i < dataSet_1.length; _i++) {
                var data = dataSet_1[_i];
                var task = __assign({}, data.payload.doc.data());
                task.id = data.payload.doc.id;
                files.push(task);
            }
            _this.files = files;
            console.log("this.files", _this.files);
        });
    }
    StorageService.prototype.uploadFile = function (file, path) {
        var _this = this;
        if (path === void 0) { path = 'filecabinet'; }
        console.log('[uploadFile]', file);
        console.log('-path', path);
        var fullPath = path + "/" + file.name;
        var fileRef = this.afStorage.ref(fullPath);
        var uploadTask = this.afStorage.upload(fullPath, file);
        var afUploadTask = uploadTask.percentageChanges();
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('-finalize', path);
                fileRef.getDownloadURL().subscribe(function (downloadURL) {
                    _this.filesCollection.add({
                        name: file.name,
                        path: fullPath,
                        downloadURL: downloadURL
                    });
                });
                return [2 /*return*/];
            });
        }); }))
            .subscribe(function (res) {
            console.log('afUploadTask', res);
        });
    };
    StorageService.prototype.downloadFile = function (file) {
        console.log('[downloadFile]', file);
        var tempLink = document.createElement('a');
        tempLink.href = file.downloadURL;
        tempLink.setAttribute('download', name);
        tempLink.click();
    };
    StorageService.prototype.deleteFile = function (file) {
        console.log('[deleteFile]', file);
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], StorageService);
    return StorageService;
}());



/***/ })

}]);
//# sourceMappingURL=file-cabinet-file-cabinet-module.js.map