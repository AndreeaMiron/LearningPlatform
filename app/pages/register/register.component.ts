import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../../services/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private service:RegisterService,
              private router:Router) { }


  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(){
    this.registerForm=this.formBuilder.group({
      firstName:['', [Validators.required,Validators.minLength(3)]],
      lastName:['', [Validators.required,Validators.minLength(3)]],
      email:['', [Validators.required,Validators.minLength(5)]],
      password:['',[Validators.required,Validators.minLength(8)]],
      phoneNr:['',[Validators.required,Validators.minLength(10)]],
      regType: ['', Validators.required]
    })
  }
  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }
  get email(){
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
  get phoneNr(){
    return this.registerForm.get('phoneNr');

  }

  get regType(){
    return this.registerForm.get('regType');
  }


  register(){

    this.service.register(this.firstName.value,this.lastName.value,this.email.value,this.password.value,this.phoneNr.value,this.regType.value).subscribe((res:any)=>{
      let role=res.role;

      if(role=="ADMIN"){
        this.router.navigate(["/login"]);
      }
      else {
        this.router.navigate(["/login"]);
      }

    });
  }
}
