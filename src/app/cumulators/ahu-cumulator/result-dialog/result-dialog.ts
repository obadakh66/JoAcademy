import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-page',
  templateUrl:'result-dialog.html'
})
export class ModalPage {

    @Input() result:any;
  constructor(public modalCtrl:ModalController) {}
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}