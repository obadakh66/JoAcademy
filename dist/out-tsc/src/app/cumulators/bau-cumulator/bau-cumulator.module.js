import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
import { BauCumulatorPage } from './bau-cumulator.page';
var routes = [
    {
        path: '',
        component: BauCumulatorPage
    }
];
var BauCumulatorPageModule = /** @class */ (function () {
    function BauCumulatorPageModule() {
    }
    BauCumulatorPageModule = tslib_1.__decorate([
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
            declarations: [BauCumulatorPage],
            entryComponents: []
        })
    ], BauCumulatorPageModule);
    return BauCumulatorPageModule;
}());
export { BauCumulatorPageModule };
//# sourceMappingURL=bau-cumulator.module.js.map