export class Student {
  name:string;
  lastName:string;
  email:string;
  entryDate:Date;

  constructor(name, lastname, email, date){
    this.name = name;
    this.lastName = lastname;
    this.email = email;
    this.entryDate = date;
  }
}
