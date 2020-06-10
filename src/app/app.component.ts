import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet, AlertController } from '@ionic/angular';
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
  backButtonSubscription;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public translate: TranslateService,
    public router: Router,
    public alertController: AlertController,
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
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (this.router.url != '/tabs/tab1') {
          await this.router.navigate(['/tabs/tab1']);
        } else if (this.router.url === '/tabs/tab1') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        }
      });
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: this.isArabic()?'':'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }
  isRtl() {
    return this.langService.isRtl();
  }
  isArabic() {
    return this.langService.isArabic();
  }
  sideDirection() {
    return this.langService.isArabic() ? 'end' : 'start'
  }
  ngAfterViewInit() {
    /*  this.backButtonSubscription = this.platform.backButton.subscribe(() => {
       navigator['app'].exitApp();
     }); */
  }
  ngOnDestroy() {
    //this.backButtonSubscription.unsubscribe();
  }
}
