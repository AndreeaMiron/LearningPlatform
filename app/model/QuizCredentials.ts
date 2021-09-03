export class QuizCredentials{
  connectedUser:string;
  correct:any;


  constructor( connectedUser:string,correct:any) {
    this.connectedUser=connectedUser;
    this.correct=correct;
  }

}
