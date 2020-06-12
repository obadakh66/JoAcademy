import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from './header.page';
import { TranslateModule } from '@ngx-translate/core';
var routes = [
    {
        path: '',
        component: HeaderPage
    }
];
var HeaderPageModule = /** @class */ (function () {
    function HeaderPageModule() {
    }
    HeaderPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                TranslateModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HeaderPage]
        })
    ], HeaderPageModule);
    return HeaderPageModule;
}());
export { HeaderPageModule };
//# sourceMappingURL=header.module.js.map