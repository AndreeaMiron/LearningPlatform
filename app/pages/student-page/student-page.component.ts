import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import {QuestionService} from '../../services/question.service';
import {DatePipe} from '@angular/common';

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
  currentDate = new Date();
  date:string;

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  videoSource: string="assets/video.mp4";

  constructor( private route: ActivatedRoute,
               private router:Router,
               private formBuilder:FormBuilder,
               private loginService:LoginService,
               private snackBar:MatSnackBar,
               private questionService:QuestionService,
               private datePipe: DatePipe) {
    this.route.queryParams.subscribe(params => {
      this.connectedUser = params['id'];
      if(Number(this.connectedUser) > 0)
        this.userLoggedIn=true;
    });

  }

  ngOnInit(): void {
    this.subscribeToNotifications();
    this.initForum();

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
    //this.router.navigate(["/login/",this.connectedUser]);
    this.router.navigate(['/introduction']);
  }
  view(){
    //this.router.navigate(["/register/",this.connectedUser]);
    this.router.navigate(['/register']);
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  head(){
    this.router.navigate(['/head']);
  }
  paragraphs(){
    this.router.navigate(['/paragraphs']);
  }
  attribute(){
    this.router.navigate(['/attribute']);
  }

  quotes() {
    this.router.navigate(['/quotes']);
  }

  colors() {
    this.router.navigate(['/colors']);
  }

  google(){
    this.router.navigate(['/google']);
  }
  count(){
    this.router.navigate(['/countdown']);
  }
}
