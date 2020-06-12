import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PsutCumulatorPage } from './psut-cumulator.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
var routes = [
    {
        path: '',
        component: PsutCumulatorPage
    }
];
var PsutCumulatorPageModule = /** @class */ (function () {
    function PsutCumulatorPageModule() {
    }
    PsutCumulatorPageModule = tslib_1.__decorate([
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
            declarations: [PsutCumulatorPage],
            entryComponents: []
        })
    ], PsutCumulatorPageModule);
    return PsutCumulatorPageModule;
}());
export { PsutCumulatorPageModule };
//# sourceMappingURL=psut-cumulator.module.js.map