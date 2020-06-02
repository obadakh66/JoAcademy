import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AverageComulatorPage } from './average-comulator.page';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderPageModule } from '../header/header.module';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: AverageComulatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule.forChild(), 
    RouterModule.forChild([
      {
        path: '',
        component: AverageComulatorPage
      }
    ])
  ],
  declarations: [AverageComulatorPage]
})
export class AverageComulatorPageModule {}
