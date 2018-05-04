import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Language = 'en' | 'de';
@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.css']
})
export class I18nComponent  {

  translate: TranslateService;

  constructor(translate: TranslateService){
    this.translate = translate;
    translate.setDefaultLang('en');
  }

  switchLanguage = (lang: Language) => {
    this.translate.use(lang);
  }
}
