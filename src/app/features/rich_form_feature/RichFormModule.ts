import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { I18NextModule, I18NEXT_NAMESPACE } from 'angular-i18next';
import { I18NextValidationMessageModule } from 'lib/angular-validation-message-i18next/I18NextValidationMessageModule';


@NgModule({
  providers: [
    FormBuilder,
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'feature.rich_form'
    }
  ],
  exports: [
  ],
  imports: [
    //core
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //lib
    I18NextModule,
    I18NextValidationMessageModule,
  ],
  declarations: [
  ],
  entryComponents: [
  ]
})
export class RichFormModule {

}
