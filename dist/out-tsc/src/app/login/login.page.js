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
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, loadingController, googlePlus, sotrage, afAuth, platform, authService) {
        this.router = router;
        this.loadingController = loadingController;
        this.googlePlus = googlePlus;
        this.sotrage = sotrage;
        this.afAuth = afAuth;
        this.platform = platform;
        this.authService = authService;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.signup = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/home');
        }).catch(function (res) {
            console.log(res);
        });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.authService.googleLogin().then(function (res) {
            _this.router.navigateByUrl('/home');
            console.log(res);
        });
    };
    LoginPage = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        __metadata("design:paramtypes", [Router,
            LoadingController,
            GooglePlus,
            Storage,
            AngularFireAuth,
            Platform,
            AuthService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map