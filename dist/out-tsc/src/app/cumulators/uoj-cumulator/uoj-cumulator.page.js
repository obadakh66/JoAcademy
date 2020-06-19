import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonContent, LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import { ModalPage } from '../result-dialog/result-dialog';
var form_template = [
    {
        "type": "textBox",
        "label": "Name",
    },
    {
        "type": "number",
        "label": "Age"
    },
    {
        "type": "select",
        "label": "favorite book",
        "options": ["Jane Eyre", "Pride and Prejudice", "Wuthering Heights"]
    }
];
var UojCumulatorPage = /** @class */ (function () {
    function UojCumulatorPage(langService, loadingController, modalController) {
        this.langService = langService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.courses = [0];
        this.coursesSum = [];
        this.hoursSum = [];
        this.mainNumbersForm = new FormGroup({
            currentGpa: new FormControl('', [Validators.required, Validators.max(4.00)]),
            noOfHoursIncluded: new FormControl('', [Validators.required, Validators.maxLength(3)])
        });
        this.formTemplate = form_template;
    }
    UojCumulatorPage.prototype.ngOnInit = function () {
        this.dynamicForm = new FormGroup({
            expectedCourseNo0: new FormControl(),
            noOfHoursCourseNo0: new FormControl(),
            statusOfCourseNo0: new FormControl(),
            previousMarkCourseNo0: new FormControl()
        });
    };
    Object.defineProperty(UojCumulatorPage.prototype, "currentGpa", {
        get: function () {
            return this.mainNumbersForm.get('currentGpa');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UojCumulatorPage.prototype, "noOfHoursIncluded", {
        get: function () {
            return this.mainNumbersForm.get('noOfHoursIncluded');
        },
        enumerable: true,
        configurable: true
    });
    UojCumulatorPage.prototype.addCourse = function () {
        if (this.courses.length < 9) {
            this.courses.push(this.courses[this.courses.length - 1] + 1);
            for (var i = 1; i < this.courses.length; i++) {
                this.dynamicForm.addControl("expectedCourseNo" + i.toString(), new FormControl('', [Validators.required]));
                this.dynamicForm.addControl("noOfHoursCourseNo" + i.toString(), new FormControl(Validators.required));
                this.dynamicForm.addControl("statusOfCourseNo" + i.toString(), new FormControl());
                this.dynamicForm.addControl("previousMarkCourseNo" + i.toString(), new FormControl());
            }
            this.scrollToBottom();
        }
    };
    UojCumulatorPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.ionContent.scrollToBottom(300);
            console.log("ok");
        }, 100);
    };
    UojCumulatorPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: this.isArabic() ? 'يرجى الإنتظار ...' : 'Please wait...',
                            duration: 1000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.presentResult();
                        return [2 /*return*/];
                }
            });
        });
    };
    UojCumulatorPage.prototype.presentResult = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModalPage,
                            cssClass: 'my-custom-class',
                            componentProps: {
                                'result': this.avgResult.toString(),
                                'avgType': 2
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            console.log(res);
                            _this.dynamicForm.reset();
                            _this.mainNumbersForm.reset();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UojCumulatorPage.prototype.removeCourse = function (course) {
        if (this.courses.length > 1) {
            this.courses = this.courses.filter(function (x) { return x != course; });
            this.dynamicForm.removeControl("expectedCourseNo" + course.toString());
            this.dynamicForm.removeControl("noOfHoursCourseNo" + course.toString());
            this.dynamicForm.removeControl("statusOfCourseNo" + course.toString());
            this.dynamicForm.removeControl("previousMarkCourseNo" + course.toString());
            console.log(this.dynamicForm.value);
        }
    };
    UojCumulatorPage.prototype.isArabic = function () {
        return this.langService.isArabic();
    };
    UojCumulatorPage.prototype.calculate = function () {
        var _this = this;
        Object.keys(this.dynamicForm.controls).forEach(function (key) {
            if (!_this.dynamicForm.get(key).value) {
                _this.dynamicForm.get(key).markAsTouched();
            }
        });
        Object.keys(this.mainNumbersForm.controls).forEach(function (key) {
            if (!_this.mainNumbersForm.get(key).value) {
                _this.mainNumbersForm.get(key).markAsTouched();
            }
        });
        if (this.dynamicForm.valid && this.mainNumbersForm.valid) {
            this.presentLoading();
            console.log(this.dynamicForm.value);
            for (var course = 0; course < this.courses.length; course++) {
                if (this.dynamicForm.controls["statusOfCourseNo" + course].value == true || this.dynamicForm.controls["statusOfCourseNo" + course].value == null) { //new
                    var multiplyValue = (this.dynamicForm.controls["expectedCourseNo" + course].value) * (this.dynamicForm.controls["noOfHoursCourseNo" + course].value);
                    this.coursesSum.push(multiplyValue);
                    this.hoursSum.push(this.dynamicForm.controls["noOfHoursCourseNo" + course].value);
                }
                if (this.dynamicForm.controls["statusOfCourseNo" + course].value == false) { //not new
                    var multiplyValue = ((this.dynamicForm.controls["expectedCourseNo" + course].value) -
                        (this.dynamicForm.controls["previousMarkCourseNo" + course].value)) *
                        (this.dynamicForm.controls["noOfHoursCourseNo" + course].value);
                    this.coursesSum.push(multiplyValue);
                }
            }
            var totalCourseSum = 0;
            this.coursesSum.forEach(function (element) {
                totalCourseSum += element;
            });
            var totalHoursSum = 0;
            this.hoursSum.forEach(function (element) {
                totalHoursSum += element;
            });
            //course1+course2+course3+course4+(course5);
            //let totalAvg=totalCourseSum/totalHoursSum
            //total
            var totalAvg = ((this.currentGpa.value * this.noOfHoursIncluded.value) + totalCourseSum) / (this.noOfHoursIncluded.value + totalHoursSum);
            console.log(totalAvg);
            this.avgResult = totalAvg;
        }
    };
    UojCumulatorPage.prototype.checkFormControlValidaty = function (name, id) {
        var formControl = this.dynamicForm.controls[name + id.toString()];
        if (!formControl.value && formControl.touched) {
            return true;
        }
        return false;
    };
    tslib_1.__decorate([
        ViewChild('IonContent',{static:true}),
        tslib_1.__metadata("design:type", IonContent)
    ], UojCumulatorPage.prototype, "ionContent", void 0);
    UojCumulatorPage = tslib_1.__decorate([
        Component({
            selector: 'app-uoj-cumulator',
            templateUrl: './uoj-cumulator.page.html',
            styleUrls: ['./uoj-cumulator.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LanguageService,
            LoadingController,
            ModalController])
    ], UojCumulatorPage);
    return UojCumulatorPage;
}());
export { UojCumulatorPage };
//# sourceMappingURL=uoj-cumulator.page.js.map