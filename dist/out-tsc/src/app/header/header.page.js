import * as tslib_1 from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';
var HeaderPage = /** @class */ (function () {
    function HeaderPage(langService, router) {
        this.langService = langService;
        this.router = router;
    }
    HeaderPage.prototype.ngOnInit = function () {
        switch (this.uniId) {
            case 1: {
                this.uniLogo = 'assets/images/ahu-logo.png';
                this.imageClass = 'ahu';
                break;
            }
            case 2: {
                this.uniLogo = 'assets/images/uoj.png';
                this.imageClass = 'uoj';
                break;
            }
            case 3: {
                this.uniLogo = 'assets/images/hu-logo.png';
                this.imageClass = 'ahu';
                break;
            }
            case 4: {
                this.uniLogo = 'assets/images/just-logo.png';
                this.imageClass = 'ahu';
                break;
            }
            case 5: {
                this.uniLogo = 'assets/images/yu-logo.png';
                this.imageClass = 'ahu';
                break;
            }
            case 6: {
                this.uniLogo = 'assets/images/aabu-logo.png';
                this.imageClass = 'ahu';
                break;
            }
            case 7: {
                this.uniLogo = 'assets/images/psut-logo.png';
                this.imageClass = 'ahu';
                break;
            }
            case 8: {
                this.uniLogo = 'assets/images/bau-logo.png';
                this.imageClass = 'ahu';
                break;
            }
            case 9: {
                this.uniLogo = 'assets/images/mutah-logo.png';
                this.imageClass = 'ahu';
                break;
            }
        }
    };
    HeaderPage.prototype.openSelect = function () {
        this.selectRef.interface = "action-sheet";
        this.selectRef.open();
    };
    HeaderPage.prototype.isRtl = function () {
        return this.langService.isArabic();
    };
    HeaderPage.prototype.changeLang = function (lang) {
        this.langService.setLang(lang);
        //this.router.navigate(["/avg-comulator"]);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], HeaderPage.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], HeaderPage.prototype, "url", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], HeaderPage.prototype, "uniId", void 0);
    tslib_1.__decorate([
        ViewChild('mySelect'),
        tslib_1.__metadata("design:type", IonSelect)
    ], HeaderPage.prototype, "selectRef", void 0);
    HeaderPage = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.page.html',
            styleUrls: ['./header.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LanguageService, Router])
    ], HeaderPage);
    return HeaderPage;
}());
export { HeaderPage };
//# sourceMappingURL=header.page.js.map