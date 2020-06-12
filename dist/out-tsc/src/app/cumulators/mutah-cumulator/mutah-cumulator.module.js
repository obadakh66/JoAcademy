import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MutahCumulatorPage } from './mutah-cumulator.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
var routes = [
    {
        path: '',
        component: MutahCumulatorPage
    }
];
var MutahCumulatorPageModule = /** @class */ (function () {
    function MutahCumulatorPageModule() {
    }
    MutahCumulatorPageModule = tslib_1.__decorate([
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
            declarations: [MutahCumulatorPage],
            entryComponents: []
        })
    ], MutahCumulatorPageModule);
    return MutahCumulatorPageModule;
}());
export { MutahCumulatorPageModule };
//# sourceMappingURL=mutah-cumulator.module.js.map