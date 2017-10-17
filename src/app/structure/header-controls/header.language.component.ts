import { I18NextService } from 'angular-i18next';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-language',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.language.component.html',
  styles: [`
    
  `]
})
export class HeaderLanguageComponent {

  language: string = 'ru';
  languages: string[] = ['ru', 'en'];

  constructor(
    private i18NextService: I18NextService,
  )
  {}

  ngOnInit() {
    this.i18NextService.events.initialized.subscribe((e) => {
      if (e) {
        this.updateState(this.i18NextService.language);
      }
    });
  }

  changeLanguage(lang: string){
    if (lang !== this.i18NextService.language) {
      this.i18NextService.changeLanguage(lang).then(x => {
        this.updateState(lang);
        document.location.reload();
      });
    }
  }

  private updateState(lang: string) {
    this.language = lang;
  }

}
