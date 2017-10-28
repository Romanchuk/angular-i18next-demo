import { RichFormModel } from './rich-form.model';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'rich-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './rich-form.component.html'
})
export class RichFormComponent implements OnInit {

  form: FormGroup;
  model: RichFormModel = new RichFormModel();

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      'count': [this.model.count, [Validators.min(1), Validators.max(3)]],
      'email': [this.model.email, [Validators.email]],
      'technicalContact': this.fb.group({
        'firstName': [this.model.technicalContact.firstName, [Validators.required]],
        'lastName': [this.model.technicalContact.lastName, [Validators.required]],
        'middleName': [this.model.technicalContact.middleName, [Validators.required]],
      })
    });
  }


  ngOnInit() {
    
  }

}
