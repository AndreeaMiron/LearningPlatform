import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: [ './colors.component.css'
  ]
})
export class ColorsComponent implements OnInit {
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
    this.router.navigate(["/tables"],{
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
    this.router.navigate(["/quotes"],{
      queryParams: {id: this.connectedUser}
    });
  }
}
