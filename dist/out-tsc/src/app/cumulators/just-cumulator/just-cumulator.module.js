import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
import { JustCumulatorPage } from './just-cumulator.page';
var routes = [
    {
        path: '',
        component: JustCumulatorPage
    }
];
var JustCumulatorPageModule = /** @class */ (function () {
    function JustCumulatorPageModule() {
    }
    JustCumulatorPageModule = tslib_1.__decorate([
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
            declarations: [JustCumulatorPage],
            entryComponents: []
        })
    ], JustCumulatorPageModule);
    return JustCumulatorPageModule;
}());
export { JustCumulatorPageModule };
//# sourceMappingURL=just-cumulator.module.js.map