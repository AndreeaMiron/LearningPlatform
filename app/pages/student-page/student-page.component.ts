import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import {QuestionService} from '../../services/question.service';
import {DatePipe} from '@angular/common';
import {ForumQuestion} from '../../model/ForumQuestion';
import {$} from 'protractor';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css'
  ]
})
export class StudentPageComponent implements OnInit {
  connectedUser:string;
  stompClient:any;
  userLoggedIn:boolean=true;
  forum:FormGroup;
  myQuestions:FormGroup;
  myQuestionsList:ForumQuestion[];
  currentDate = new Date();
  date:string;
  responseForm:FormGroup;
  showEdit:boolean=false;
  show:boolean=false;

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  videoSource: string="assets/video.mp4";

  constructor( private route: ActivatedRoute,
               private router:Router,
               private formBuilder:FormBuilder,
               private loginService:LoginService,
               private snackBar:MatSnackBar,
               private questionService:QuestionService,
               private datePipe: DatePipe,
               private forumService:QuestionService) {
    this.route.queryParams.subscribe(params => {
      this.connectedUser = params['id'];
      console.log(this.connectedUser)
      if(Number(this.connectedUser) > 0)
        this.userLoggedIn=true;
    });

  }

  ngOnInit(): void {

    /*this.questionService.findMyQuestions(this.connectedUser).subscribe((res) => {

        this.myQuestionsList = res;
        console.log(this.myQuestionsList)

      },
      (_error) => {

      });*/
    this.questionService.findAllQuestions().subscribe((res) => {

        this.myQuestionsList = res;
        console.log(this.myQuestionsList)

      },
      (_error) => {

      });
    this.subscribeToNotifications();
    this.initForum();
    this.initMyQuestionsForm();

  }

  initMyQuestionsForm(){
    this.myQuestions=this.formBuilder.group({});
  }


get question(){
    return this.forum.get('question');
}
  initForum(){
    this.forum=this.formBuilder.group({question:['',Validators.required]})
  }
  submitForum(){
    this.date = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd HH:mm');
    this.questionService.submitQuestion(this.question.value,this.connectedUser,this.date).subscribe((res:any)=>{});;
  }
  onLogout(){
    this.loginService.logout(this.connectedUser);
    this.connectedUser='-1';
    this.userLoggedIn=false;
    this.router.navigate(["/login"]);
  }
  get response(){
    return this.responseForm.get('response');
  }
  respondToQuestion(id:number){
    this.show=true;
    if(this.show) {
      this.forumService.sendResponseFromUser(Number(this.connectedUser),id, this.response.value).subscribe((res: any) => {
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

  subscribeToNotifications(){
    const URL="http://localhost:8080/socket";
    const websocket=new SockJS(URL);
    this.stompClient=Stomp.over(websocket);
    this.stompClient.connect({},()=>{
      this.stompClient.subscribe('/topic/socket/student-page', notification=>{
        let message=notification.body;

        this.snackBar.open(message,'Close',{
          duration:10000
        })
      })
    });
  }
  intro(){
    this.router.navigate(['/introduction'],{
      queryParams: {id: this.connectedUser}
    });
  }
  view(){

    this.router.navigate(['/register'],{
      queryParams: {id: this.connectedUser}
    });
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  head(){
    this.router.navigate(['/head'],{
      queryParams: {id: this.connectedUser}
    });
  }
  paragraphs(){
    this.router.navigate(['/paragraphs'],{
      queryParams: {id: this.connectedUser}
    });
  }
  attribute(){
    this.router.navigate(['/attribute'],{
      queryParams: {id: this.connectedUser}
    });
  }

  quotes() {
    this.router.navigate(['/quotes'],{
      queryParams: {id: this.connectedUser}
    });
  }

  colors() {
    this.router.navigate(['/colors'],{
      queryParams: {id: this.connectedUser}
    });
  }

  google(){
    this.router.navigate(['/google'],{
      queryParams: {id: this.connectedUser}
    });
  }
  count(){
    this.router.navigate(['/countdown'],{
      queryParams: {id: this.connectedUser}
    });
  }

  tables(){
    this.router.navigate(['/tables'],{
      queryParams: {id: this.connectedUser}
    });
  }
  lists(){
    this.router.navigate(['/lists'],{
      queryParams: {id: this.connectedUser}
    });
  }
  blocks(){
    this.router.navigate(['/blocks'],{
      queryParams: {id: this.connectedUser}
    });
  }
  classes(){
    this.router.navigate(['/classes'],{
      queryParams: {id: this.connectedUser}
    });
  }

  menu(){
    this.router.navigate(['/menu'],{
      queryParams: {id: this.connectedUser}
    });
  }

  map() {
    this.router.navigate(['/mapping'],{
      queryParams: {id: this.connectedUser}
    });
  }

  slide() {
    this.router.navigate(['/slideshow'],{
      queryParams: {id: this.connectedUser}
    });
  }
}
