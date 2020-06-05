

import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { HeaderPage } from './header/header.page';
import { TranslateModule } from '@ngx-translate/core';
import { ModalPage } from './cumulators/result-dialog/result-dialog';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule.forChild()
    ],
    declarations: [HeaderPage,ModalPage],
    entryComponents:[ModalPage],
    exports: [HeaderPage,ModalPage]
})
export class SharedModule {}