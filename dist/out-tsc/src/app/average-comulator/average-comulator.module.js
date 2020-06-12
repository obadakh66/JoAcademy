import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AverageComulatorPage } from './average-comulator.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared.module';
var routes = [
    {
        path: '',
        component: AverageComulatorPage
    }
];
var AverageComulatorPageModule = /** @class */ (function () {
    function AverageComulatorPageModule() {
    }
    AverageComulatorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SharedModule,
                TranslateModule.forChild(),
                RouterModule.forChild([
                    {
                        path: '',
                        component: AverageComulatorPage
                    }
                ])
            ],
            declarations: [AverageComulatorPage]
        })
    ], AverageComulatorPageModule);
    return AverageComulatorPageModule;
}());
export { AverageComulatorPageModule };
//# sourceMappingURL=average-comulator.module.js.map