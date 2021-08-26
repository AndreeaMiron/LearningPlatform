export class QuestionCredentials{
  question:string;
  connectedUser:string;
  date:string;


  constructor(question:string,connectedUser:string,date:string) {
    this.question=question;
    this.connectedUser=connectedUser;
    this.date=date;
  }

}
