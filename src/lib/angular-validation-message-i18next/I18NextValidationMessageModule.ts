
import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { I18NextModule } from 'angular-i18next';

import { ValidationMessageModule } from '../angular-validation-message/ValidationMessageModule';
import { ValidationMessageComponent } from '../angular-validation-message/components/ValidationMessageComponent';
import { I18NextValidationMessageComponent } from './I18NextValidationMessageComponent';


export const declarations = [
  I18NextValidationMessageComponent,
];

export const providers = [
  {
    provide: ValidationMessageComponent,
    useValue: I18NextValidationMessageComponent
  }
];

@NgModule({
  declarations: declarations,
  exports: declarations,
  entryComponents: declarations,
  imports: [
    I18NextModule,
    ValidationMessageModule
  ],
  providers: providers
})
export class I18NextValidationMessageModule {}
