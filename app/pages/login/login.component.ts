import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  connectedUser: string;


  constructor(private formBuilder: FormBuilder,
              private service: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.initLoginForm();
  }


  initLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(){
    this.service.login(this.email.value, this.password.value).subscribe((res: any) => {
      let role = res.role;
      this.connectedUser = res.id;

      localStorage.setItem('token', 'Basic ' + btoa(this.email.value + ':' + this.password.value));

      if (role == 'ADMIN'){
        this.router.navigate(['/admin-page'],{
          queryParams: {id: res.id}
        });
      }
      else{
        this.router.navigate(['/student-page'], {
          queryParams: {id: res.id}
        });
      }
    }, (_error) => {
      alert('Invalid username or password');
    });

  }

  clickRegister(){
    this.router.navigate(['/register']);
  }
  resetPassword(){
    this.router.navigate(['/reset-pass']);
  }
}
