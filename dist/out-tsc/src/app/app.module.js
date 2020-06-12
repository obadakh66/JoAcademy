import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LanguageService } from './services/language.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
var config = {
    apiKey: "AIzaSyBqeutHFcU-jnEiubvNltcXmgZv0cF3Lm4",
    authDomain: "joacademy-62f81.firebaseapp.com",
    databaseURL: "https://joacademy-62f81.firebaseio.com",
    projectId: "joacademy-62f81",
    storageBucket: "joacademy-62f81.appspot.com",
    messagingSenderId: "820347745051",
    appId: "1:820347745051:web:2b26712a00a6a393a659be",
    measurementId: "G-E6525VH477"
};
export function HttpLoaderFactory(httpClient) {
    return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json?cb=' + new Date().getTime());
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                HttpClientModule,
                AngularFireModule.initializeApp(config),
                AngularFirestoreModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                })
            ],
            providers: [
                StatusBar,
                SplashScreen,
                Firebase,
                LanguageService,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent],
            exports: [TranslateModule]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map