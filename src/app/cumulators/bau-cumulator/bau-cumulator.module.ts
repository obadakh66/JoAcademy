import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
import { BauCumulatorPage } from './bau-cumulator.page';

const routes: Routes = [
  {
    path: '',
    component: BauCumulatorPage
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
  declarations: [BauCumulatorPage],
  entryComponents:[]
})
export class BauCumulatorPageModule {}
