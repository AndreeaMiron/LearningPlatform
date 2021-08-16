import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'
  ]
})
export class QuotesComponent implements OnInit {
  connectedUser:string;
  userLoggedIn:boolean=true;
  constructor(private router:Router,
              private route: ActivatedRoute,
              @Inject(DOCUMENT) private document: Document) {
    this.route.queryParams.subscribe(params => {
      this.connectedUser = params['id'];
      if(Number(this.connectedUser) > 0)
        this.userLoggedIn=true;
    });
  }

  ngOnInit(): void {
  }

  next(){
    this.router.navigate(["/quotes"]);
  }
  quiz(){
    // this.router.navigate(["/intro-survey"]);
  }

  home(){
    this.router.navigate(["/student-page"]);
  }
  back(){
    this.router.navigate(["/attribute"]);
  }
}
