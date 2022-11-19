import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static shouldMatchCurrentPassword(
        control: AbstractControl
    ): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '123')
                    resolve({ shouldMatchCurrentPassword: true });
                else
                    resolve(null)
            }, 1000);
        });
    }
    static shouldMatchNewPassword(control: AbstractControl): ValidationErrors|null{
        return {shouldMatchNewPassword: true}
    }
}
