import {Component, Inject, OnInit,HostListener} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'
  ]
})
export class HeadComponent implements OnInit {
  connectedUser:string;
  userLoggedIn:boolean=true;

  meta:boolean=true;
  metaIcon:boolean=true;
  script:boolean=true;
  scriptIcon:boolean=true;



  constructor( private router:Router,
               private route: ActivatedRoute,
               @Inject(DOCUMENT) private document: Document
               ) {  this.route.queryParams.subscribe(params => {
    this.connectedUser = params['id'];
    if(Number(this.connectedUser) > 0)
      this.userLoggedIn=true;
  }); }

  ngOnInit(): void {
  }


  next(){
    this.router.navigate(["/paragraphs"]);
  }
  quiz(){
   // this.router.navigate(["/intro-survey"]);
  }

  home(){
    this.router.navigate(["/student-page"]);
  }

  back(){
    this.router.navigate(["/introduction"]);
  }

  metaFunction(){
    this.meta=!this.meta;
    this.metaIcon=true;
  }

  scriptFunction(){
    this.script=!this.script;
    this.scriptIcon=true;
  }

  myFunction(){
    document.getElementById("js").innerHTML="Butonul a fost apasat";
  }
}
