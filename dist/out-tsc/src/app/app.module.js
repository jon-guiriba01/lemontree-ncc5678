var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { IonicStorageModule } from '@ionic/storage';
import { firebase } from '../config';
import { TaskModalPage } from './modals/task-modal/task-modal.page';
import { AddEventPage } from './modals/add-event/add-event.page';
import { TaskModalPageModule } from './modals/task-modal/task-modal.module';
import { AddEventPageModule } from './modals/add-event/add-event.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [TaskModalPage, AddEventPage],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                NgCalendarModule,
                AngularFireModule.initializeApp(firebase),
                AngularFireAuthModule,
                AngularFirestoreModule.enablePersistence(),
                TaskModalPageModule,
                AddEventPageModule,
                AngularFireStorageModule,
                IonicStorageModule.forRoot()
            ],
            providers: [
                StatusBar,
                SplashScreen,
                NativeStorage,
                GooglePlus,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map