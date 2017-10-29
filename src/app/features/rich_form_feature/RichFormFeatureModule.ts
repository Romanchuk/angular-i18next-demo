
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { I18NextModule, I18NEXT_NAMESPACE } from 'angular-i18next';
import { ValidationModule } from '../../../lib/validation/ValidationModule';
import { ValidationMessageModule } from '../../../lib/angular-validation-message/ValidationMessageModule';
import { I18NextValidationMessageModule } from '../../../lib/angular-validation-message-i18next/I18NextValidationMessageModule';
import { RichFormFeatureRouterModule } from './RichFormFeatureRouterModule';
import { RichFormComponent } from './rich-form.component';


export const declarations = [
  RichFormComponent
];

export const providers = [
  FormBuilder,
  {
    provide: I18NEXT_NAMESPACE,
    useValue: 'feature.rich_form'
  }
];

@NgModule({
  bootstrap: declarations,
  declarations: declarations,
  providers: providers,
  imports: [
    //core
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //feature
    RichFormFeatureRouterModule,

    //lib
    I18NextModule,
    ValidationModule,
    ValidationMessageModule,
    I18NextValidationMessageModule,
  ]
})
export class RichFormFeatureModule {

}
