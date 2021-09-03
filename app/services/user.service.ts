import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RegisterCredentialsDTO} from '../model/RegisterCredentialsDTO';
import {QuizCredentials} from '../model/QuizCredentials';
import {ForumQuestion} from '../model/ForumQuestion';
import {User} from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL:string="http://localhost:8080/user";
  getUserURL:string="http://localhost:8080/getuser/";
  constructor(private httpClient:HttpClient) { }

  sendQuiz(connectedUser:string,correct:any){
    let credentials = new QuizCredentials(connectedUser,correct);

    return this.httpClient.post(this.baseURL,credentials);
  }



}
