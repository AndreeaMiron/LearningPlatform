import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css'
  ]
})
export class AttributeComponent implements OnInit {
  connectedUser:string;
  userLoggedIn:boolean=true;


  constructor(private router:Router,
              private route: ActivatedRoute,
              @Inject(DOCUMENT) private document: Document) {
    this.route.queryParams.subscribe(params => {
    this.connectedUser = params['id'];
    if(Number(this.connectedUser) > 0)
      this.userLoggedIn=true;
  }); }

  ngOnInit(): void {
  }

  next(){
    this.router.navigate(["/quotes"],{
      queryParams: {id: this.connectedUser}
    });
  }
  quiz(){
    this.router.navigate(["/quiz"],{
      queryParams: {id: this.connectedUser}
    });
  }

  home(){
    this.router.navigate(["/student-page"],{
      queryParams: {id: this.connectedUser}
    });
  }
  back(){
    this.router.navigate(["/paragraphs"],{
      queryParams: {id: this.connectedUser}
    });
  }
}
