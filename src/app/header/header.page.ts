import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  @Input() title: any;
  @Input() url: any;
  @Input() uniId: any;
  constructor(private langService: LanguageService,private router :Router) { }
  uniLogo: string;
  imageClass: string;
  ngOnInit() {
    switch(this.uniId){
      case 1:{
        this.uniLogo='assets/images/ahu-logo.png'
        this.imageClass='ahu'
        break;
      }
      case 2:{
        this.uniLogo='assets/images/uoj.png'
        this.imageClass='uoj'
        break;
      }
      case 3:{
        this.uniLogo='assets/images/hu-logo.png'
        this.imageClass='ahu'
        break;
      }
      case 4:{
        this.uniLogo='assets/images/just-logo.png'
        this.imageClass='ahu'
        break;
      } 
      case 5:{
        this.uniLogo='assets/images/yu-logo.png'
        this.imageClass='ahu'
        break;
      }
      case 6:{
        this.uniLogo='assets/images/aabu-logo.png'
        this.imageClass='ahu'
        break;
      }
       case 7:{
        this.uniLogo='assets/images/psut-logo.png'
        this.imageClass='ahu'
        break;
      }
       case 8:{
        this.uniLogo='assets/images/bau-logo.png'
        this.imageClass='ahu'
        break;
      }
     case 9:{
        this.uniLogo='assets/images/mutah-logo.png'
        this.imageClass='ahu'
        break;
      }
    }
  }
  @ViewChild('mySelect') selectRef: IonSelect;
  openSelect() {
    this.selectRef.interface = "action-sheet"
    this.selectRef.open();
  }
  isRtl() {
    return this.langService.isArabic();
  }

  changeLang(lang) {
    this.langService.setLang(lang);
    //this.router.navigate(["/avg-comulator"]);
  }

} 
