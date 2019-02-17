var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
    { path: 'task', loadChildren: './task/task.module#TaskPageModule' },
    { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
    { path: 'file-cabinet', loadChildren: './file-cabinet/file-cabinet.module#FileCabinetPageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
    { path: 'task-modal', loadChildren: './modals/task-modal/task-modal.module#TaskModalPageModule' },
    { path: 'add-event', loadChildren: './modals/add-event/add-event.module#AddEventPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map