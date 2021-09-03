import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css'
  ]
})
export class MappingComponent implements OnInit {
  connectedUser:string;
  userLoggedIn:boolean=true;
  display:boolean=false;
  displayIcon:boolean=true;
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
    this.router.navigate(["/menu"],{
      queryParams: {id: this.connectedUser}
    });
  }

  home(){
    this.router.navigate(["/student-page"],{
      queryParams: {id: this.connectedUser}
    });
  }
  back(){
    this.router.navigate(["/countdown"],{
      queryParams: {id: this.connectedUser}
    });
  }

  displayFunction(){
    this.display=!this.display;
    this.displayIcon=true;
  }
}
