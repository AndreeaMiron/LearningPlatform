import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CredentialsDTO} from '../model/CredentialsDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = 'http://localhost:8080/auth/login';
  logoutURL = 'http://localhost:8080/auth/logout';
  connectedUsersURL = 'http://localhost:8080/auth/connected-users';

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    const credentials = new CredentialsDTO(email, password);
    console.log(credentials.email,credentials.password)
    return this.httpClient.post(this.baseURL, credentials);

  }
  findNrOfUsers(){
    return this.httpClient.get<string>(this.connectedUsersURL);
  }
  logout(connectedUser:string){
    return this.httpClient.post(this.logoutURL,connectedUser).subscribe();
  }
}
