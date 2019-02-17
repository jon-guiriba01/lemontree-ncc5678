var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
var routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'calendar',
                children: [
                    {
                        path: '',
                        loadChildren: '../calendar/calendar.module#CalendarPageModule'
                    }
                ]
            },
            {
                path: 'file-cabinet',
                children: [
                    {
                        path: '',
                        loadChildren: '../file-cabinet/file-cabinet.module#FileCabinetPageModule'
                    }
                ]
            },
            {
                path: 'task',
                children: [
                    {
                        path: '',
                        loadChildren: '../task/task.module#TaskPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/calendar',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/calendar',
        pathMatch: 'full'
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());
export { HomePageRoutingModule };
//# sourceMappingURL=home.router.module.js.map