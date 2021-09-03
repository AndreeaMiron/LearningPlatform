import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {} from 'googlemaps';


@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css'
  ]
})
export class GoogleComponent implements OnInit {
  connectedUser:string;
  userLoggedIn:boolean=true;
  dictionary:boolean=true;
  dictIcon:boolean=true;

  lat = 46.76927693338374;
  lng = 23.585612998235217;


  constructor( private router:Router,
               private route: ActivatedRoute,
               @Inject(DOCUMENT) private document: Document) { this.route.queryParams.subscribe(params => {
    this.connectedUser = params['id'];
    if(Number(this.connectedUser) > 0)
      this.userLoggedIn=true;
  });  }

  ngOnInit(): void {

  }

  next(){
    this.router.navigate(["/countdown"],{
      queryParams: {id: this.connectedUser}
    });
  }

  home(){
    this.router.navigate(["/student-page"],{
      queryParams: {id: this.connectedUser}
    });
  }

  dictFunction(){
    this.dictionary=!this.dictionary;
    this.dictIcon=true;
  }


}
