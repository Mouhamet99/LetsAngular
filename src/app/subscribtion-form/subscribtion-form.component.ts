import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribtion-form',
  templateUrl: './subscribtion-form.component.html',
  styleUrls: ['./subscribtion-form.component.css']
})

export class SubscribtionFormComponent {
  // form = new FormGroup({
  //   name: new FormControl('',Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl('', Validators.email),
  //     phone: new FormControl,
  //   }),
  //   topics: new FormArray([]),
  // })
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: ['', Validators.email],
        phone: []
      }),
      topics: fb.array([])
    })
  }


}
