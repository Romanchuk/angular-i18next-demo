import { NgModule, ModuleWithProviders, Type } from '@angular/core';

import { ValidationMessageModule } from 'lib/angular-validation-message/ValidationMessageModule';
import { I18NextValidationMessageModule } from 'lib/angular-validation-message-i18next/I18NextValidationMessageModule';

import { ValidationOnBlurDirective } from './directives/ValidationOnBlurDirective';
import { ValidationDirtyChecker } from './services/ValidationDirtyChecker';


export const declarations = [
  ValidationOnBlurDirective
];

@NgModule({
  declarations: declarations,
  exports: declarations,
  imports: [
    ValidationMessageModule,
    I18NextValidationMessageModule
  ],
  providers: [
    ValidationDirtyChecker
  ]
})
export class ValidationModule {
}
