import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
var FcmService = /** @class */ (function () {
    function FcmService(firebase, afs, platform) {
        this.firebase = firebase;
        this.afs = afs;
        this.platform = platform;
    }
    FcmService.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebase.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.saveToken(token);
                        return [2 /*return*/];
                }
            });
        });
    };
    FcmService.prototype.saveToken = function (token) {
        if (!token)
            return;
        var devicesRef = this.afs.collection('devices');
        var data = {
            token: token,
            userId: 'testUserId'
        };
        return devicesRef.doc(token).set(data);
    };
    FcmService.prototype.onNotifications = function () {
        return this.firebase.onNotificationOpen();
    };
    FcmService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Firebase,
            AngularFirestore,
            Platform])
    ], FcmService);
    return FcmService;
}());
export { FcmService };
//# sourceMappingURL=fcm.service.js.map