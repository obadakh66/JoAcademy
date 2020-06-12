import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AabuCumulatorPage } from './aabu-cumulator.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
var routes = [
    {
        path: '',
        component: AabuCumulatorPage
    }
];
var AabuCumulatorPageModule = /** @class */ (function () {
    function AabuCumulatorPageModule() {
    }
    AabuCumulatorPageModule = tslib_1.__decorate([
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
            declarations: [AabuCumulatorPage],
            entryComponents: []
        })
    ], AabuCumulatorPageModule);
    return AabuCumulatorPageModule;
}());
export { AabuCumulatorPageModule };
//# sourceMappingURL=aabu-cumulator.module.js.map