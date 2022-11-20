import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password-validators';

@Component({
    selector: 'change-password-form',
    templateUrl: './change-password-form.component.html',
    styleUrls: ['./change-password-form.component.css'],
})
export class ChangePasswordFormComponent {
    form:FormGroup;
    constructor(fb: FormBuilder){
        this.form = fb.record({
            oldPassword: ['', Validators.required, PasswordValidators.shouldMatchCurrentPassword],
            newPassword: ['', [Validators.required, Validators.minLength(5) ]],
            confirmPassword: ['', Validators.required]
        },{
            validators: PasswordValidators.confirmPasswordshouldMatchNewPassword
        })
    }

    get oldPassword(){
        return this.form.get('oldPassword') as FormControl;
    }

    get newPassword(){
        return this.form.get('newPassword') as FormControl;
    }

    get confirmPassword(){
        return this.form.get('confirmPassword') as FormControl;
    }

    log(formControl: any){
        console.log(formControl);
    }

    changePassword(){
        console.log(this.form);
    }
}
