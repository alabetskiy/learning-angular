import { AbstractControl, ValidationErrors } from '@angular/forms';


export class oldPasswordValidators {

    static checkIfValid(control: AbstractControl): Promise<ValidationErrors> | null {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "123") {
                    return resolve(null);
                } else {
                    return resolve({checkIfValid: true});
                }},
                2000);
        });          
    }
}
