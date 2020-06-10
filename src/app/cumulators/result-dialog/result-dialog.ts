import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'modal-page',
  templateUrl: 'result-dialog.html'
})
export class ModalPage implements OnInit {

  @Input() result: string;
  @Input() avgType: any;
  percentageAvg: any;
  numberAvg: any;
  constructor(public modalCtrl: ModalController, private socialSharing: SocialSharing, private langService: LanguageService) { }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  ngOnInit() {
    console.log(this.result)
    this.result = this.result.substring(0, this.result.indexOf('.') + 3)
    console.log(this.result)
    if (this.avgType == 1) {
      this.percentageAvg = this.result
      this.numberAvg = (Number(this.result) / 100) * 4
    }
    if (this.avgType == 2) {
      this.percentageAvg = (Number(this.result) / 4) * 100
      this.numberAvg = this.result
    }
  }
  shareWhatsapp() {
    this.socialSharing.shareViaWhatsApp(
      this.langService.isArabic() ? `معدلي التراكمي الجامعي على تطبيق جو اكاديمي هو :   ${this.percentageAvg} %` : 
      `My GPA on (JoAcademy) app is :  ${this.percentageAvg} %`,
      null,
      "https://play.google.com/store/apps/details?id=io.joacademy.studentapp");
  }
  shareFacebook() {
    this.socialSharing.shareViaFacebook(this.langService.isArabic() ? `معدلي التراكمي الجامعي على تطبيق جو اكاديمي هو :   ${this.percentageAvg} %` : 
    `My GPA on (JoAcademy) app is :  ${this.percentageAvg} %`,
    null,
    "https://play.google.com/store/apps/details?id=io.joacademy.studentapp");
  } 
  shareInstagram() {
    this.socialSharing.shareViaInstagram(this.langService.isArabic() ? `معدلي التراكمي الجامعي على تطبيق جو اكاديمي هو :   ${this.percentageAvg} %` : 
    `My GPA on (JoAcademy) app is :  ${this.percentageAvg} %`,
    null
    );
  }
  checkResultString() {
    let resultNumber = this.percentageAvg;
    if (resultNumber <= 50) {
      return '1'
    }
    if (resultNumber > 50 && resultNumber <= 60) {
      return '2'
    }
    if (resultNumber > 60 && resultNumber <= 70) {
      return '3'
    }
    if (resultNumber > 70 && resultNumber <= 80) {
      return '4'
    }
    if (resultNumber > 80 && resultNumber <= 90) {
      return '5'
    }
    if (resultNumber > 90 && resultNumber <= 100) {
      return '6'
    }
  }
}