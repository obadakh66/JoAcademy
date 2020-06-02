import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title:this.isArabic()?'حاسبة المعدل':'Average Calculator',
      url: '/ahu-cumulator',
      icon: 'calculator'
    },
    {
      title:this.isArabic()?'اختر جامعتك':'Choose University',
      url: '/avg-comulator',
      icon: 'school'
    }
   
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public translate: TranslateService,
    public router: Router,
    public langService: LanguageService,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  ngOnInit() {

  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.langService.getLanguage()
    });
  }
  isRtl() {
    return this.langService.isRtl();
  } 
  isArabic() {
    return this.langService.isArabic();
  }
}
