import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { I18NextModule, I18NEXT_NAMESPACE } from 'angular-i18next';
import { I18NextValidationMessageModule } from 'lib/angular-validation-message-i18next/I18NextValidationMessageModule';
import { RichFormFeatureRouterModule } from './RichFormFeatureRouterModule';
import { RichFormComponent } from './rich-form.component';

@NgModule({
  bootstrap: [RichFormComponent],
  declarations: [RichFormComponent],
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
    //feature
    RichFormFeatureRouterModule,

    //lib
    I18NextModule,
    I18NextValidationMessageModule,
  ],
  entryComponents: [
  ]
})
export class RichFormFeatureModule {

}
