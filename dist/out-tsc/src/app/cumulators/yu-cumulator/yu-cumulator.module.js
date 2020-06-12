import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { YuCumulatorPage } from './yu-cumulator.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
var routes = [
    {
        path: '',
        component: YuCumulatorPage
    }
];
var YuCumulatorPageModule = /** @class */ (function () {
    function YuCumulatorPageModule() {
    }
    YuCumulatorPageModule = tslib_1.__decorate([
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
            declarations: [YuCumulatorPage],
            entryComponents: []
        })
    ], YuCumulatorPageModule);
    return YuCumulatorPageModule;
}());
export { YuCumulatorPageModule };
//# sourceMappingURL=yu-cumulator.module.js.map