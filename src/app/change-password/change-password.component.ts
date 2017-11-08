import { confirmPasswordValidation } from './confirmpassword.validators';
import { oldPasswordValidators } from './oldPassword.validators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {


  

  changePasswordForm = new FormGroup({

    oldPassword: new FormControl(
      "",
      Validators.required,
      oldPasswordValidators.checkIfValid
    ),

    newPassword: new FormControl("",
      [
        Validators.required
    ]
    ),
    confirmPassword: new FormControl("", [Validators.required])
  });
  

  get oldPassword(){
    return this.changePasswordForm.get('oldPassword');
  };
  get newPassword(){
    return this.changePasswordForm.get('newPassword');
  };
  get confirmPassword(){
    return this.changePasswordForm.get('confirmPassword');
  };

  log(x){
console.log(x);
  }



}


