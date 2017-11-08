import { ValidationErrors, AbstractControl } from '@angular/forms';


export class confirmPasswordValidation {

    static confirmPasswordMatch(confirmPass: AbstractControl): ValidationErrors | null {

        return { confirmPasswordMatch: confirmPass.value }

    }

    static newPasswordMatch(newPass: AbstractControl): ValidationErrors | null {
        
                return { newPasswordMatch: newPass.value }
        
            }
}
