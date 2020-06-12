import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LanguageService } from 'src/app/services/language.service';
var ModalPage = /** @class */ (function () {
    function ModalPage(modalCtrl, socialSharing, langService) {
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.langService = langService;
    }
    ModalPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    };
    ModalPage.prototype.ngOnInit = function () {
        console.log(this.result);
        this.result = this.result.substring(0, this.result.indexOf('.') + 3);
        console.log(this.result);
        if (this.avgType == 1) {
            this.percentageAvg = this.result;
            this.numberAvg = (Number(this.result) / 100) * 4;
        }
        if (this.avgType == 2) {
            this.percentageAvg = (Number(this.result) / 4) * 100;
            this.numberAvg = this.result;
        }
    };
    ModalPage.prototype.shareWhatsapp = function () {
        this.socialSharing.shareViaWhatsApp(this.langService.isArabic() ? "\u0645\u0639\u062F\u0644\u064A \u0627\u0644\u062A\u0631\u0627\u0643\u0645\u064A \u0627\u0644\u062C\u0627\u0645\u0639\u064A \u0639\u0644\u0649 \u062A\u0637\u0628\u064A\u0642 \u062C\u0648 \u0627\u0643\u0627\u062F\u064A\u0645\u064A \u0647\u0648 :   " + this.percentageAvg + " %" :
            "My GPA on (JoAcademy) app is :  " + this.percentageAvg + " %", null, "https://play.google.com/store/apps/details?id=io.joacademy.studentapp");
    };
    ModalPage.prototype.shareFacebook = function () {
        this.socialSharing.shareViaFacebook(this.langService.isArabic() ? "\u0645\u0639\u062F\u0644\u064A \u0627\u0644\u062A\u0631\u0627\u0643\u0645\u064A \u0627\u0644\u062C\u0627\u0645\u0639\u064A \u0639\u0644\u0649 \u062A\u0637\u0628\u064A\u0642 \u062C\u0648 \u0627\u0643\u0627\u062F\u064A\u0645\u064A \u0647\u0648 :   " + this.percentageAvg + " %" :
            "My GPA on (JoAcademy) app is :  " + this.percentageAvg + " %", 'null', "https://play.google.com/store/apps/details?id=io.joacademy.studentapp");
    };
    ModalPage.prototype.shareInstagram = function () {
        this.socialSharing.shareViaInstagram(this.langService.isArabic() ? "\u0645\u0639\u062F\u0644\u064A \u0627\u0644\u062A\u0631\u0627\u0643\u0645\u064A \u0627\u0644\u062C\u0627\u0645\u0639\u064A \u0639\u0644\u0649 \u062A\u0637\u0628\u064A\u0642 \u062C\u0648 \u0627\u0643\u0627\u062F\u064A\u0645\u064A \u0647\u0648 :   " + this.percentageAvg + " %" :
            "My GPA on (JoAcademy) app is :  " + this.percentageAvg + " %", null);
    };
    ModalPage.prototype.checkResultString = function () {
        var resultNumber = this.percentageAvg;
        if (resultNumber <= 50) {
            return '1';
        }
        if (resultNumber > 50 && resultNumber <= 60) {
            return '2';
        }
        if (resultNumber > 60 && resultNumber <= 70) {
            return '3';
        }
        if (resultNumber > 70 && resultNumber <= 80) {
            return '4';
        }
        if (resultNumber > 80 && resultNumber <= 90) {
            return '5';
        }
        if (resultNumber > 90 && resultNumber <= 100) {
            return '6';
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalPage.prototype, "result", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ModalPage.prototype, "avgType", void 0);
    ModalPage = tslib_1.__decorate([
        Component({
            selector: 'modal-page',
            templateUrl: 'result-dialog.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, SocialSharing, LanguageService])
    ], ModalPage);
    return ModalPage;
}());
export { ModalPage };
//# sourceMappingURL=result-dialog.js.map