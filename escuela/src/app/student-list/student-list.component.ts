import { Component, OnInit } from '@angular/core';

import { Student } from '../myClasses/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  listOpc : string = "";
  students = [
    new Student("Juan", "Kerendon", "juan@gmail.com", new Date()),
    new Student("Pedro", "De la Rosa", "pedro@gmail.com", new Date()),
    new Student("Michael", "Jordan", "mj@gmail.com", new Date()),
    new Student("Bugs", "Bunny", "bugs@gmail.com", new Date()),
    new Student("Clark", "Kent", "super@gmail.com", new Date())
  ]

  ngOnInit(): void {
  }

}
