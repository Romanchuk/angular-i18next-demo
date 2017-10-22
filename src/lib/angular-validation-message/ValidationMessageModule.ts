import { NgModule, ModuleWithProviders, Type } from '@angular/core';

import { ValidationMessageDirective } from './directives/ValidationMesageDirective';

import { ValidationErrorBuilder } from './services/errorBuilder/ValidationErrorBuilder';

import { ValidationMessageComponent } from './components/ValidationMessageComponent';

export const declarations = [
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
export class ValidationMessageModule {
  static forRoot(): ModuleWithProviders {
      return {
        ngModule: ValidationMessageModule,
        providers: [
          ValidationErrorBuilder,
          {
            provide: ValidationMessageComponent,
            useValue: ValidationMessageComponent
          }
        ]
      };
    }
}
