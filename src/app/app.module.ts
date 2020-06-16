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
import { FCM } from '@ionic-native/fcm/ngx'

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


const config = {
  apiKey: "AIzaSyBqeutHFcU-jnEiubvNltcXmgZv0cF3Lm4",
  authDomain: "joacademy-62f81.firebaseapp.com",
  databaseURL: "https://joacademy-62f81.firebaseio.com",
  projectId: "joacademy-62f81",
  storageBucket: "joacademy-62f81.appspot.com",
  messagingSenderId: "820347745051",
  appId: "1:820347745051:web:2b26712a00a6a393a659be",
  measurementId: "G-E6525VH477"
};

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json?cb=' + new Date().getTime());
}
@NgModule({
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
    FCM,
    LanguageService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule { }
