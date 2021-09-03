import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styles: [
  ]
})
export class ResetPassComponent implements OnInit {
resetForm:FormGroup;
user:User;


  constructor(private formBuilder: FormBuilder,
  private service: LoginService,
  private router: Router,
              private userService:UserService) { }

  ngOnInit(): void {

    this.initResetForm();
  }
initResetForm(){

  this.resetForm = this.formBuilder.group({
    email: [null, Validators.required],
    password1: [null, Validators.required],
    password2: [null, Validators.required]
  });
}

  get email() {
    return this.resetForm.get('email');
  }

  get password1() {
    return this.resetForm.get('password1');
  }

  get password2() {
    return this.resetForm.get('password2');
  }


  checkIfExists(){
    this.userService.findUserByEmail(this.email.value).subscribe((res) => {

        this.user = res;

      },
      (_error) => {
        alert('User not found');
        return false;
      });
    return true;
  }
  save() {
    if (this.checkIfExists()) {
      if (this.password1.value == this.password2.value)
        this.service.changePassword(this.email.value, this.password1.value).subscribe((res: any) => {

        }, (_error) => {
          alert('Wrong password, try again!');
        });
      this.router.navigate(['/login']);
    }
  }

}
