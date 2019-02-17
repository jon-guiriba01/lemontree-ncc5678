var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import * as config from '../../config';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as $ from 'jquery';
var FileCabinetPage = /** @class */ (function () {
    function FileCabinetPage(authService, afStorage, storageService) {
        this.authService = authService;
        this.afStorage = afStorage;
        this.storageService = storageService;
        this.files = [];
        this.loadGapi().then(function (res) {
            console.log(res);
        });
    }
    FileCabinetPage.prototype.ngOnInit = function () {
    };
    FileCabinetPage.prototype.upload = function () {
        var _this = this;
        $('.hidden-input').click();
        $('.hidden-input').change(function (e) {
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
                    'apiKey': config.google.apikey,
                    'clientId': config.google.webClientId,
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
    FileCabinetPage = __decorate([
        Component({
            selector: 'app-file-cabinet',
            templateUrl: './file-cabinet.page.html',
            styleUrls: ['./file-cabinet.page.scss'],
        }),
        __metadata("design:paramtypes", [AuthService,
            AngularFireStorage,
            StorageService])
    ], FileCabinetPage);
    return FileCabinetPage;
}());
export { FileCabinetPage };
//# sourceMappingURL=file-cabinet.page.js.map