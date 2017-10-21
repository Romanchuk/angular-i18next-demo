import { Component, ViewEncapsulation, Input, VERSION  } from '@angular/core';

@Component({
  selector: 'app-header',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  version: string = "0.0.0";
  constructor(){
    this.version = VERSION.full;
  }

}
