import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ValidationError } from './ValidationError';

@Injectable()
export class ValidationErrorBuilder {
  build(form: FormGroup|FormArray, prevKey?: string): ValidationError[] {
    let validationErrors: ValidationError[] = [];
    let formControls = form.controls;
    for (const key in formControls) {
      if (formControls.hasOwnProperty(key)) {
        let fullKey = prevKey ? [prevKey, key].join('.') : key;
        let ctrl: AbstractControl = formControls[key];
        if (ctrl instanceof FormControl) {
          if (!ctrl.valid)
          {
            for (const erKey in ctrl.errors) {
              if (ctrl.errors.hasOwnProperty(erKey)) {
                let valError = new ValidationError();
                valError.control = ctrl;
                valError.controlKey = fullKey;
                valError.errorKey = erKey;
                validationErrors.push(valError);
              }
            }
          }
        } else {
          let group = <FormGroup|FormArray>ctrl;
          validationErrors = validationErrors.concat(this.build(group, fullKey));
        }
      }
    }
    return validationErrors;
  }
}
