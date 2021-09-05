import {Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'
  ]
})
export class IntroductionComponent implements OnInit {
  connectedUser:string;
  userLoggedIn:boolean=true;

  title = 'Introduction';

  @ViewChild('pdf') pdf: ElementRef;

  constructor( private router:Router,
               private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {
    this.connectedUser = params['id'];
    console.log(this.connectedUser);
    if(Number(this.connectedUser) > 0)
      this.userLoggedIn=true;
  });}

  ngOnInit(): void {

  }

  next(){
    this.router.navigate(["/head"],{
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

 /* getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });}


   async  downloadAsPDF() {
     var docDefinition = {
       content: [

         {
           image: await this.getBase64ImageFromURL(
             "../../assets/p1.png"
           )
         }
         ]}
       const doc = new jsPDF();

    const pdfTable = this.pdf.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();

  }
*/

}
