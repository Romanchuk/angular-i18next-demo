import { NgModule, ModuleWithProviders, Type } from '@angular/core';

import { I18NextValidationMessageModule } from 'lib/angular-validation-message-i18next/I18NextValidationMessageModule';

import { ValidationOnBlurDirective } from './directives/ValidationOnBlurDirective';
import { ValidationDirtyChecker } from './services/ValidationDirtyChecker';

export const declarations = [
  ValidationOnBlurDirective
];

@NgModule({
  declarations: declarations,
  exports: declarations,
  imports: [I18NextValidationMessageModule]
})
export class ValidationModule {
  static forRoot(): ModuleWithProviders {
      return {
        ngModule: ValidationModule,
        providers: [
          ValidationDirtyChecker
        ]
      };
    }
}
