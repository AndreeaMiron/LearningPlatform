import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ForumQuestion} from '../../model/ForumQuestion';
import {QuestionService} from '../../services/question.service';
import {User} from '../../model/User';
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
  usersList:User[];
  showEdit:boolean=false;
  show:boolean=false;
  notshow:boolean=true;



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
        console.log("Intrebari")
        console.log(this.questionsList);


      },
      (_error) => {

      });
    this.forumService.findAllUsersWithQuestions().subscribe((res) => {

        this.usersList = res;
        console.log("Useri")
        console.log(this.usersList);

      },
      (_error) => {

      });

    this.initQuestionsForm();
    this.subscribeToNotifications(this.connectedUser);
  }
  initQuestionsForm(){
    this.questions=this.formBuilder.group({
    })
  }

  get response(){
    return this.responseForm.get('response');
  }
  subscribeToNotifications(connectedUser:string){
    const URL="http://localhost:8080/socket";
    const websocket=new SockJS(URL);
    this.stompClient=Stomp.over(websocket);
    this.stompClient.connect({},()=>{
      this.stompClient.subscribe('/topic/socket/admin-page/'+connectedUser, notification=>{
        let message=notification.body;

        this.snackBar.open(message,'Close',{
          duration:10000
        })
      })
    });
  }
  ngOnDestroy(): void {
    this.stompClient.disconnect();
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
    this.show=true;
    this.notshow=false;
    if(this.show) {
      this.forumService.sendResponse(id, this.response.value).subscribe((res: any) => {
      });
    }


  }
  showResponseForm(){
    this.showEdit = !this.showEdit;
    if(this.showEdit){
    this.responseForm=this.formBuilder.group({
      response:['', [Validators.required]],
    });}
  }
}
