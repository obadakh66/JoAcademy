import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AhuCumulatorPage } from './ahu-cumulator.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
var routes = [
    {
        path: '',
        component: AhuCumulatorPage
    }
];
var AhuCumulatorPageModule = /** @class */ (function () {
    function AhuCumulatorPageModule() {
    }
    AhuCumulatorPageModule = tslib_1.__decorate([
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
            declarations: [AhuCumulatorPage],
            entryComponents: []
        })
    ], AhuCumulatorPageModule);
    return AhuCumulatorPageModule;
}());
export { AhuCumulatorPageModule };
//# sourceMappingURL=ahu-cumulator.module.js.map