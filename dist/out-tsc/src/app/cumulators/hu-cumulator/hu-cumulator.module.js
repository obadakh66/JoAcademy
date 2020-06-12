import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
import { HuCumulatorPage } from './hu-cumulator.page';
var routes = [
    {
        path: '',
        component: HuCumulatorPage
    }
];
var HuCumulatorPageModule = /** @class */ (function () {
    function HuCumulatorPageModule() {
    }
    HuCumulatorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SharedModule,
                TranslateModule.forChild(),
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HuCumulatorPage],
            entryComponents: []
        })
    ], HuCumulatorPageModule);
    return HuCumulatorPageModule;
}());
export { HuCumulatorPageModule };
//# sourceMappingURL=hu-cumulator.module.js.map