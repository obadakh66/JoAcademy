import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  @Input() title: any;
  @Input() url: any;
  constructor(private langService: LanguageService) { }

  ngOnInit() {
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
  }

}
