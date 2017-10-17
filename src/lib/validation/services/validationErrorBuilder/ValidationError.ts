import { FormControl, ControlValueAccessor } from '@angular/forms';

export class ValidationError {
  control: FormControl;
  controlKey: string;
  errorKey: string;
  get error() {
    return this.control.getError(this.errorKey);
  }
}
