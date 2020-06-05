import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MutahCumulatorPage } from './mutah-cumulator.page';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderPageModule } from 'src/app/header/header.module';
import { SharedModule } from 'src/app/shared.module';
import { ModalPage } from '../result-dialog/result-dialog';

const routes: Routes = [
  {
    path: '',
    component: MutahCumulatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MutahCumulatorPage],
  entryComponents:[]
})
export class MutahCumulatorPageModule {}
