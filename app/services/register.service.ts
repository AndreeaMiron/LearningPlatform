import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterCredentialsDTO} from '../model/RegisterCredentialsDTO';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseURL:string="http://localhost:8080/auth/register";
  constructor(private httpClient:HttpClient) { }

  register(firstName:string,lastName:string,email:string,password:string,phoneNr:string,type:string){
    let credentials = new RegisterCredentialsDTO(firstName,lastName,email, password,phoneNr,type);
    return this.httpClient.post(this.baseURL,credentials);
  }

}
