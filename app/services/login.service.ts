import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CredentialsDTO} from '../model/CredentialsDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = 'http://localhost:8080/auth/login';
  logoutURL = 'http://localhost:8080/auth/logout';
  passwordURL = 'http://localhost:8080/auth/newpassword';
  connectedUsersURL:string="http://localhost:8080/auth/connected-users";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    let credentials = new CredentialsDTO(email, password);
    return this.httpClient.post(this.baseURL, credentials);

  }

  logout(connectedUser:string){
    return this.httpClient.post(this.logoutURL,connectedUser).subscribe();
  }

  changePassword(email: string, password: string){
    let credentials = new CredentialsDTO(email, password);
    return this.httpClient.post(this.passwordURL, credentials);
  }

  findNrOfUsers(){
    return this.httpClient.get<string>(this.connectedUsersURL);
  }
}
