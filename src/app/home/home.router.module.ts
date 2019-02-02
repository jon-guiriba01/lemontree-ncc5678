import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
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

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
