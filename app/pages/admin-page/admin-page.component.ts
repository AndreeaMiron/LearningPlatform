import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ForumQuestion} from '../../model/ForumQuestion';
import {QuestionService} from '../../services/question.service';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'
  ]
})
export class AdminPageComponent implements OnInit {
  connectedUser:string;
  stompClient:any;
  userLoggedIn:boolean=true;
  questions:FormGroup;
  responseForm:FormGroup;
  questionsList:ForumQuestion[];
  showEdit:boolean=false;

  constructor( private formBuilder:FormBuilder,
               private route: ActivatedRoute,
              private router:Router,
              private snackBar:MatSnackBar,
              private loginService:LoginService,
              private forumService:QuestionService) {
    this.route.queryParams.subscribe(params => {
      this.connectedUser = params['id'];
      if(Number(this.connectedUser) > 0)
        this.userLoggedIn=true;
    });
  }

  ngOnInit(): void {
    this.forumService.findAllQuestions().subscribe((res) => {

        this.questionsList = res;

      },
      (_error) => {

      });

    this.initQuestionsForm();
    //this.intiRespondForm();
    this.subscribeToNotifications();
  }
  initQuestionsForm(){
    this.questions=this.formBuilder.group({
    })
  }
  intiRespondForm(){
    this.responseForm=this.formBuilder.group({
      response:['', [Validators.required]],
    })
  }
  get response(){
    return this.responseForm.get('response');
  }
  subscribeToNotifications(){
    const URL="http://localhost:8080/socket";
    const websocket=new SockJS(URL);
    this.stompClient=Stomp.over(websocket);
    this.stompClient.connect({},()=>{
      this.stompClient.subscribe('/topic/socket/admin-page', notification=>{
        let message=notification.body;

        this.snackBar.open(message,'Close',{
          duration:10000
        })
      })
    });
  }

  onLogout(){
    this.loginService.logout(this.connectedUser);
    this.connectedUser='-1';
    this.userLoggedIn=false;
    this.router.navigate(["/login"]);
  }

  deleteQuestion(id:number){
    this.forumService.deleteQuestion(id).subscribe((data=>{
      this.forumService.deleteQuestion(id);
      this.router.navigate(["/admin-page"],{
        queryParams:{id:id}
      })
    }));

  }
  respondToQuestion(id:number){
    this.forumService.sendResponse(id,this.response.value) .subscribe((res:any)=>{
    });
    this.deleteQuestion(id);

  }
  showResponseForm(){
    this.showEdit = !this.showEdit;
    if(this.showEdit){
    this.responseForm=this.formBuilder.group({
      response:['', [Validators.required]],
    });}
  }
}
