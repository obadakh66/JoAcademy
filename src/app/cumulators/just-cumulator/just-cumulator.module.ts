import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { HeaderPageModule } from 'src/app/header/header.module';
import { SharedModule } from 'src/app/shared.module';
import { ModalPage } from '../result-dialog/result-dialog';
import { JustCumulatorPage } from './just-cumulator.page';

const routes: Routes = [
  {
    path: '',
    component: JustCumulatorPage
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
  declarations: [JustCumulatorPage],
  entryComponents:[]
})
export class JustCumulatorPageModule {}
