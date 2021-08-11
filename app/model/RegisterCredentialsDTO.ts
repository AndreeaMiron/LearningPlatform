export class RegisterCredentialsDTO{
  firstName:string;
  lastName:string;
  email:string;
  password: string;
  phoneNr:string;
  type:string;

  constructor(firstName:string,lastName:string,email:string,password:string,phoneNr:string,type:string) {
    this.lastName=lastName;
    this.firstName=firstName;
    this.email=email;
    this.password = password;
    this.phoneNr=phoneNr;
    this.type=type;
  }

}
