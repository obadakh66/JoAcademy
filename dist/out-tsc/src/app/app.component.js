import * as tslib_1 from "tslib";
import { Component, ViewChildren, QueryList } from '@angular/core';
import { Platform, IonRouterOutlet, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LanguageService } from './services/language.service';
import { Firebase } from '@ionic-native/firebase/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, translate, router, firebase, toastCtrl, alertController, langService, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.router = router;
        this.firebase = firebase;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.langService = langService;
        this.statusBar = statusBar;
        this.appPages = [
            {
                title: this.isArabic() ? 'حاسبة المعدل' : 'Average Calculator',
                url: '/ahu-cumulator',
                icon: 'calculator'
            },
            {
                title: this.isArabic() ? 'اختر جامعتك' : 'Choose University',
                url: '/avg-comulator',
                icon: 'school'
            }
        ];
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.initializeApp();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.langService.getLanguage();
            _this.initializeFirebase();
        });
    };
    AppComponent.prototype.initializeFirebase = function () {
        this.firebase.subscribe("all");
        this.platform.is('android') ? this.initializeFirebaseAndroid() : this.initializeFirebaseIOS();
    };
    AppComponent.prototype.initializeFirebaseAndroid = function () {
        this.firebase.getToken().then(function (token) { });
        this.firebase.onTokenRefresh().subscribe(function (token) { });
        this.subscribeToPushNotifications();
    };
    AppComponent.prototype.initializeFirebaseIOS = function () {
        var _this = this;
        this.firebase.grantPermission()
            .then(function () {
            _this.firebase.getToken().then(function (token) { });
            _this.firebase.onTokenRefresh().subscribe(function (token) { });
            _this.subscribeToPushNotifications();
        })
            .catch(function (error) {
            _this.firebase.logError(error);
        });
    };
    AppComponent.prototype.subscribeToPushNotifications = function () {
        var _this = this;
        this.firebase.onNotificationOpen().subscribe(function (response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!response.tap) return [3 /*break*/, 1];
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastCtrl.create({
                            message: response.body,
                            duration: 3000
                        })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    AppComponent.prototype.backButtonEvent = function () {
        var _this = this;
        this.platform.backButton.subscribeWithPriority(0, function () {
            _this.routerOutlets.forEach(function (outlet) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.router.url != '/tabs/tab1')) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.router.navigate(['/tabs/tab1'])];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            if (this.router.url === '/tabs/tab1') {
                                if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                                    this.lastTimeBackPress = new Date().getTime();
                                    this.presentAlertConfirm();
                                }
                                else {
                                    navigator['app'].exitApp();
                                }
                            }
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    AppComponent.prototype.presentAlertConfirm = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            // header: 'Confirm!',
                            message: this.isArabic() ? '' : 'Are you sure you want to exit the app?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Close App',
                                    handler: function () {
                                        navigator['app'].exitApp();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.isRtl = function () {
        return this.langService.isRtl();
    };
    AppComponent.prototype.isArabic = function () {
        return this.langService.isArabic();
    };
    AppComponent.prototype.sideDirection = function () {
        return this.langService.isArabic() ? 'end' : 'start';
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        /*  this.backButtonSubscription = this.platform.backButton.subscribe(() => {
           navigator['app'].exitApp();
         }); */
    };
    AppComponent.prototype.ngOnDestroy = function () {
        //this.backButtonSubscription.unsubscribe();
    };
    tslib_1.__decorate([
        ViewChildren(IonRouterOutlet),
        tslib_1.__metadata("design:type", QueryList)
    ], AppComponent.prototype, "routerOutlets", void 0);
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            TranslateService,
            Router,
            Firebase,
            ToastController,
            AlertController,
            LanguageService,
            StatusBar])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map