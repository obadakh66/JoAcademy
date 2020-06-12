import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AverageComulatorPage = /** @class */ (function () {
    function AverageComulatorPage(router) {
        this.router = router;
    }
    AverageComulatorPage.prototype.ngOnInit = function () {
    };
    AverageComulatorPage.prototype.navigateToAhu = function () {
        this.router.navigate(["/ahu-cumulator"]);
    };
    AverageComulatorPage.prototype.navigateToUoj = function () {
        this.router.navigate(["/uoj-cumulator"]);
    };
    AverageComulatorPage.prototype.navigateToHu = function () {
        this.router.navigate(["/hu-cumulator"]);
    };
    AverageComulatorPage.prototype.navigateToJust = function () {
        this.router.navigate(["/just-cumulator"]);
    };
    AverageComulatorPage.prototype.navigateToYu = function () {
        this.router.navigate(["/yu-cumulator"]);
    };
    AverageComulatorPage.prototype.navigateToAabu = function () {
        this.router.navigate(["/aabu-cumulator"]);
    };
    AverageComulatorPage.prototype.navigateToPsut = function () {
        this.router.navigate(["/psut-cumulator"]);
    };
    AverageComulatorPage.prototype.navigateToBau = function () {
        this.router.navigate(["/bau-cumulator"]);
    };
    AverageComulatorPage.prototype.navigateToMutah = function () {
        this.router.navigate(["/mutah-cumulator"]);
    };
    AverageComulatorPage = tslib_1.__decorate([
        Component({
            selector: 'app-average-comulator',
            templateUrl: './average-comulator.page.html',
            styleUrls: ['./average-comulator.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AverageComulatorPage);
    return AverageComulatorPage;
}());
export { AverageComulatorPage };
//# sourceMappingURL=average-comulator.page.js.map