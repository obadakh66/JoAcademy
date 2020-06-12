import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
import { UojCumulatorPage } from './uoj-cumulator.page';
var routes = [
    {
        path: '',
        component: UojCumulatorPage
    }
];
var UojCumulatorPageModule = /** @class */ (function () {
    function UojCumulatorPageModule() {
    }
    UojCumulatorPageModule = tslib_1.__decorate([
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
            declarations: [UojCumulatorPage],
            entryComponents: []
        })
    ], UojCumulatorPageModule);
    return UojCumulatorPageModule;
}());
export { UojCumulatorPageModule };
//# sourceMappingURL=uoj-cumulator.module.js.map