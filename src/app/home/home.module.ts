import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { HomePageRoutingModule } from './home.router.module';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NgCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    HomePageRoutingModule,

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
