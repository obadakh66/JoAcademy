import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AhuCumulatorPage } from './ahu-cumulator.page';
import { TranslateModule } from '@ngx-translate/core';
import { ModalPage } from './result-dialog/result-dialog';
import { HeaderPageModule } from 'src/app/header/header.module';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AhuCumulatorPage
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
  declarations: [AhuCumulatorPage,ModalPage],
  entryComponents:[ModalPage]
})
export class AhuCumulatorPageModule {}
