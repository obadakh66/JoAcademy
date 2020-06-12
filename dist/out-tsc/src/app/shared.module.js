import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from './header/header.page';
import { TranslateModule } from '@ngx-translate/core';
import { ModalPage } from './cumulators/result-dialog/result-dialog';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                IonicModule,
                TranslateModule.forChild()
            ],
            declarations: [HeaderPage, ModalPage],
            entryComponents: [ModalPage],
            providers: [SocialSharing],
            exports: [HeaderPage, ModalPage]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map