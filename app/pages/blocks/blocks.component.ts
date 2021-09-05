import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'
  ]
})
export class BlocksComponent implements OnInit {
  connectedUser:string;
  userLoggedIn:boolean=true;
  url: string = "https://angular.io/api/router/RouterLink";
  urlSafe: SafeResourceUrl;

  constructor(private router:Router,
              private route: ActivatedRoute,
              @Inject(DOCUMENT) private document: Document,
              public sanitizer: DomSanitizer) {
    this.route.queryParams.subscribe(params => {
      this.connectedUser = params['id'];
      if(Number(this.connectedUser) > 0)
        this.userLoggedIn=true;
    });
  }

  ngOnInit(): void {

    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  next(){
    this.router.navigate(["/classes"],{
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
    this.router.navigate(["/lists"],{
      queryParams: {id: this.connectedUser}
    });
  }

}
