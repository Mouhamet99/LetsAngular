import { Component } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
  contactMethods  = [
    {id: 1 , name:'email'},
    {id: 2 , name:'phone'}
  ]

  log(x: any) {
    console.log(x);
  }
  
  submit(form: any){
    console.log(form);
    
  }
}
