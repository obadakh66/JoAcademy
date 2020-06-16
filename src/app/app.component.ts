import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LanguageService } from './services/language.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFirestore } from 'angularfire2/firestore';

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
    public toastCtrl: ToastController,
    private fcm: FCM,
    public firestore: AngularFirestore,
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
      this.fcm.getToken().then(token => {
        console.log(token);
        this.createUser(token)
      });
      this.initializeFirebase();
    });

  }
  createUser(token){
    return this.firestore.collection('User').doc().set({
      token
    });
  }
   initializeFirebase() {
    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      if (data.wasTapped) {
        console.log('Received in background');
      } else {
        console.log('Received in foreground');
      }
    });
  }/*
  initializeFirebaseAndroid() {
    this.firebase.getToken().then(token => { });
    this.firebase.onTokenRefresh().subscribe(token => { })
    this.subscribeToPushNotifications();
  }
  initializeFirebaseIOS() {
    this.firebase.grantPermission()
      .then(() => {
        this.firebase.getToken().then(token => { });
        this.firebase.onTokenRefresh().subscribe(token => { })
        this.subscribeToPushNotifications();
      })
      .catch((error) => {
        this.firebase.logError(error);
      });
  }
  subscribeToPushNotifications() {
    this.firebase.onNotificationOpen().subscribe(async (response) => {
      if (response.tap) {
        //Received while app in background (this should be the callback when a system notification is tapped)
        //This is empty for our app since we just needed the notification to open the app
      } else {
        //received while app in foreground (show a toast)
        const toast = await this.toastCtrl.create({
          message: response.body,
          duration: 3000
        });
        toast.present();
      }
    });
  } */
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
      message: this.isArabic() ? '' : 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
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
