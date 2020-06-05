import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-page',
  templateUrl: 'result-dialog.html'
})
export class ModalPage implements OnInit {

  @Input() result: string;
  @Input() avgType: any;
  percentageAvg: any;
  numberAvg: any;
  constructor(public modalCtrl: ModalController) { }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  ngOnInit() {
    console.log(this.result)
    this.result =this.result.substring(0, this.result.indexOf('.')+3)
    console.log(this.result)
    if (this.avgType == 1) {
      this.percentageAvg = this.result
      this.numberAvg=(Number(this.result)/100) *4
    }
    if (this.avgType == 2) {
      this.percentageAvg = (Number(this.result)/4)*100
      this.numberAvg=this.result
    }
  }
  checkResultString(){
    let resultNumber=this.percentageAvg;
      if(resultNumber<=50){
        return '1'
      }
      if(resultNumber>50 && resultNumber<=60){
        return '2'
      }
    if(resultNumber>60 && resultNumber<=70){
        return '3'
      }
    if(resultNumber>70 && resultNumber<=80){
        return '4'
      }
    if(resultNumber>80 && resultNumber<=90){
        return '5'
      }
    if(resultNumber>90 && resultNumber<=100){
        return '6'
    }
  }
}