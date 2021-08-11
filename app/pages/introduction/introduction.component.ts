import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'
  ]
})
export class IntroductionComponent implements OnInit {
  connectedUser:string;
  userLoggedIn:boolean=true;

  constructor( private router:Router,
               private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {
    this.connectedUser = params['id'];
    if(Number(this.connectedUser) > 0)
      this.userLoggedIn=true;
  });}

  ngOnInit(): void {

  }

  next(){
    this.router.navigate(["/head"]);
  }
quiz(){
  this.router.navigate(["/intro-survey"]);
}

home(){
  this.router.navigate(["/student-page"]);
}

tutorial(){
    window.location.href="https://www.youtube.com/watch?v=5cTQ6i-KmZc&list=PLRlcs-KgbzEcAnDpKq7zYBsXx8_qkJ9ME";

}
}
