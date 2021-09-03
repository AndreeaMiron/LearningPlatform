export class UserResponseCredentials {
  connectedUser:number;
  id: number;
  response: string;


  constructor( connectedUser:number,id: number, response: string) {
    this.connectedUser=connectedUser;
    this.id=id;
    this.response=response;

  }
}
