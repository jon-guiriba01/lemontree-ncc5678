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
import { AngularFireAuth } from '@angular/fire/auth';
var SignupPage = /** @class */ (function () {
    function SignupPage(afAuth) {
        this.afAuth = afAuth;
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.signup = function () {
        console.log("signup ", this.email);
        console.log("password ", this.password);
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (res) {
            console.log(res);
        }).catch(function (res) {
            console.log(res);
        });
    };
    SignupPage = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        __metadata("design:paramtypes", [AngularFireAuth])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.page.js.map