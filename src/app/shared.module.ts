

import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { HeaderPage } from './header/header.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule.forChild()
    ],
    declarations: [HeaderPage],
    exports: [HeaderPage]
})
export class SharedModule {}