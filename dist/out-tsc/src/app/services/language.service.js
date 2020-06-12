import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var LanguageService = /** @class */ (function () {
    function LanguageService(translate) {
        this.translate = translate;
    }
    LanguageService.prototype.setLang = function (lang) {
        localStorage.setItem("lang", lang);
        this.translate.use(lang);
    };
    LanguageService.prototype.getLanguage = function () {
        var langToken = localStorage.getItem("lang");
        if (!langToken) {
            localStorage.setItem("lang", 'en');
            this.translate.use('en');
            return 'en';
        }
        this.translate.use(langToken);
        return langToken;
    };
    LanguageService.prototype.isRtl = function () {
        var langToken = localStorage.getItem("lang");
        if (!langToken)
            return "ltr";
        if (langToken == 'ar') {
            return "rtl";
        }
        else {
            return "ltr";
        }
    };
    LanguageService.prototype.isArabic = function () {
        var langToken = localStorage.getItem("lang");
        if (langToken == 'ar') {
            return true;
        }
        else {
            return false;
        }
    };
    LanguageService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService])
    ], LanguageService);
    return LanguageService;
}());
export { LanguageService };
//# sourceMappingURL=language.service.js.map