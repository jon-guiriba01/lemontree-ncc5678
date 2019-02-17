import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { DragulaModule } from 'ng2-dragula';
import { IonicModule } from '@ionic/angular';

import { TaskPage } from './task.page';

const routes: Routes = [
  {
    path: '',
    component: TaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DragulaModule
  ],
  declarations: [TaskPage]
})
export class TaskPageModule {}
