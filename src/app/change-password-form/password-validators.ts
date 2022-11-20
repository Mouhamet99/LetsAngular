import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static shouldMatchCurrentPassword(
        control: AbstractControl
    ): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '123')
                    resolve({ shouldMatchCurrentPassword: true });
                else resolve(null);
            }, 1000);
        });
    }
    static confirmPasswordshouldMatchNewPassword(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newPassword') as FormControl;
        let confirmPassword = control.get('confirmPassword') as FormControl;
        
        return confirmPassword.value !== newPassword.value
            ? { confirmPasswordshouldMatchNewPassword: true }
            : null;
    }
}
