import { Component, ViewEncapsulation, Input, VERSION  } from '@angular/core';

@Component({
  selector: 'app-footer',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
  angularVersion: string = '0.0.0';
  i18nextVersion: string = '0.0.0';
  constructor(){
    this.angularVersion = VERSION.full;
    this.i18nextVersion = '19.5.4'; // todo: get version automaticaly
  }

}
