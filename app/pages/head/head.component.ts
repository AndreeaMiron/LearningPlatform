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

  windowScrolled: boolean;

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

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  next(){
    //this.router.navigate(["/head"]);
  }
  quiz(){
   // this.router.navigate(["/intro-survey"]);
  }

  home(){
    this.router.navigate(["/student-page"]);
  }

  tutorial(){
    window.location.href="https://www.youtube.com/watch?v=5cTQ6i-KmZc&list=PLRlcs-KgbzEcAnDpKq7zYBsXx8_qkJ9ME";

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
