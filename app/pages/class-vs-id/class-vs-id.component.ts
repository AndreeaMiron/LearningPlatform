import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-class-vs-id',
  templateUrl: './class-vs-id.component.html',
  styleUrls: ['./class-vs-id.component.css'
  ]
})
export class ClassVsIdComponent implements OnInit {
  connectedUser:string;
  userLoggedIn:boolean=true;
  isShown: boolean;
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
    this.isShown=true;
  }


  home(){
    this.router.navigate(["/student-page"],{
      queryParams: {id: this.connectedUser}
    });
  }
  back(){
    this.router.navigate(["/classes"],{
      queryParams: {id: this.connectedUser}
    });
  }
  toggleShow() {
    this.isShown=!this.isShown;
  }

   displayResult() {
    document.getElementById("Header").innerHTML = "Sa ai o zi frumoasa!";
  }

}
