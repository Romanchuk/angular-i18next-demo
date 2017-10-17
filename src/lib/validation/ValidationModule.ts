import { NgModule, ModuleWithProviders, Type } from '@angular/core';

import { ValidationOnBlurDirective } from './directives/ValidationOnBlurDirective';
import { ValidationMessageDirective } from './directives/ValidationMesageDirective';

import { ValidationErrorBuilder } from './services/validationErrorBuilder/ValidationErrorBuilder';
import { ValidationDirtyChecker } from './services/ValidationDirtyChecker';

import { ValidationMessageComponent } from './components/ValidationMessageComponent';

export const declarations = [
  ValidationOnBlurDirective,
  ValidationMessageDirective,
  ValidationMessageComponent
];

@NgModule({
  declarations: declarations,
  exports: declarations,
  entryComponents: [
    ValidationMessageComponent
  ]
})
export class ValidationModule {
  static forRoot(): ModuleWithProviders {
      return {
        ngModule: ValidationModule,
        providers: [
          ValidationErrorBuilder,
          ValidationDirtyChecker,
          {
            provide: ValidationMessageComponent,
            useValue: ValidationMessageComponent
          }
        ]
      };
    }
}
