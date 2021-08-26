import {Component, HostListener} from '@angular/core';
import { google } from '@google/maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'frontapp';
  userLoggedIn:boolean=true;
  windowScrolled: boolean;

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
    tutorial(){
      window.location.href="https://www.youtube.com/watch?v=5cTQ6i-KmZc&list=PLRlcs-KgbzEcAnDpKq7zYBsXx8_qkJ9ME";

  }
}
