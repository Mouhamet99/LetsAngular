import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
    form = new FormGroup({
        username: new FormControl(
            '',
            [
                Validators.required,
                Validators.minLength(3),
                UsernameValidators.cannotContainSpace,
            ],
            UsernameValidators.shouldBeUnique
        ),
        password: new FormControl('', Validators.required),
    });

    passwordStrengths = {
        weak: { name: 'weak', color: 'bg-danger', width: '10' },
        far: { name: 'far', color: 'bg-warning', width: '25' },
        good: { name: 'good', color: 'bg-secondary', width: '50' },
        strong: { name: 'strong', color: 'bg-success', width: '100' },
    };

    currentPasswordStrength = { name: 'weak', color: 'bg-danger', width: '10' };

    handlePasswordStrength(password: any) {
        const passwordValue = password.value as string;

        this.currentPasswordStrength =
            passwordValue.length >= 10
                ? this.passwordStrengths.strong
                : passwordValue.length >= 8
                ? this.passwordStrengths.good
                : passwordValue.length >= 4
                ? this.passwordStrengths.far
                : this.passwordStrengths.weak;
    }

    get username() {
        return this.form.get('username');
    }

    get password() {
        return this.form.get('password');
    }
}
