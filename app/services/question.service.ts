import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ForumQuestion} from '../model/ForumQuestion';
import {QuestionCredentials} from '../model/QuestionCredentials';
import {Observable} from 'rxjs';
import {ResponseCredentials} from '../model/ResponseCredentials';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl:string="http://localhost:8080/forum";
  getUrl:string="http://localhost:8080/forum/questions";
  constructor(private httpClient:HttpClient) { }

  submitQuestion(question:string,connectedUser:string,date:string){
    let credentials=new QuestionCredentials(question,connectedUser,date)
    return this.httpClient.post(this.baseUrl,credentials);
  }

  findAllQuestions(){
    return this.httpClient.get<ForumQuestion[]>(this.getUrl);
  }

  findAllUsersWithQuestions(){
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  deleteQuestion(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  sendResponse(id: number, response: string) {
    let credentials=new ResponseCredentials(id,response);
    return this.httpClient.put(this.baseUrl,credentials);
  }

  findMyQuestions(connectedUser: string) {
    return this.httpClient.get<ForumQuestion[]>(this.baseUrl+"/myquestions"+connectedUser);

  }
}
