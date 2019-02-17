import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestPage } from './test.page';
import { DragulaModule } from 'ng2-dragula';

const routes: Routes = [
  {
    path: '',
    component: TestPage
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
  declarations: [TestPage]
})
export class TestPageModule {}