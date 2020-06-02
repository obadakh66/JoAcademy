import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {

  constructor(private translate: TranslateService) {

  }

  setLang(lang) {
    localStorage.setItem("lang" , lang)
    this.translate.use(lang);
  }
 
  getLanguage() {
    let langToken = localStorage.getItem("lang")
    if (!langToken) {
      localStorage.setItem("lang", 'en')
      this.translate.use('en')
      return 'en'
    }
   
    this.translate.use(langToken)
    return langToken
  }

  isRtl() {
    let langToken = localStorage.getItem("lang")
    if (!langToken)
      return "ltr";

    if (langToken == 'ar') {
      return "rtl";
    }
    else {
      return "ltr";
    }
  }
  isArabic() {
    let langToken = localStorage.getItem("lang")
   
    if (langToken == 'ar') {
      return true;
    }
    else {
      return false;
    }
  }
}
