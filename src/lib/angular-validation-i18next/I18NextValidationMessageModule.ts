import { I18NextModule } from 'angular-i18next';
import { I18NextValidationMessageComponent } from './I18NextValidationMessageComponent';
import { ValidationMessageComponent } from './../../lib/validation/components/ValidationMessageComponent';

import { NgModule, ModuleWithProviders, Type } from '@angular/core';

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
    I18NextModule
  ]
})
export class I18NextValidationMessageModule {}
