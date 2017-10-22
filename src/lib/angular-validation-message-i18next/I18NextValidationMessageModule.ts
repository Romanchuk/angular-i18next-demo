
import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { I18NextModule } from 'angular-i18next';

import { ValidationMessageModule } from 'lib/angular-validation-message/ValidationMessageModule';
import { ValidationMessageComponent } from 'lib/angular-validation-message/components/ValidationMessageComponent';
import { I18NextValidationMessageComponent } from 'lib/angular-validation-message-i18next/I18NextValidationMessageComponent';


export const declarations = [
  I18NextValidationMessageComponent,
];

@NgModule({
  providers: [
    {
      provide: ValidationMessageComponent,
      useValue: I18NextValidationMessageComponent
    }
  ],
  declarations: declarations,
  exports: declarations,
  entryComponents: declarations,
  imports: [
    I18NextModule,
    ValidationMessageModule
  ]
})
export class I18NextValidationMessageModule {}
