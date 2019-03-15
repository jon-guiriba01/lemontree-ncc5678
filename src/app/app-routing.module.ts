import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'task', loadChildren: './task/task.module#TaskPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'file-cabinet', loadChildren: './file-cabinet/file-cabinet.module#FileCabinetPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'task-modal', loadChildren: './modals/task-modal/task-modal.module#TaskModalPageModule' },
  { path: 'add-event', loadChildren: './modals/add-event/add-event.module#AddEventPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'test', loadChildren: './pages/test/test.module#TestPageModule' },
  { path: 'team-details', loadChildren: './team-details/team-details.module#TeamDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
