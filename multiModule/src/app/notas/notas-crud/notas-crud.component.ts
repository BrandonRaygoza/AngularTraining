import { Component, OnInit } from '@angular/core';

import { Note } from '../../models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notas-crud',
  templateUrl: './notas-crud.component.html',
  styleUrls: ['./notas-crud.component.css']
})
export class NotasCrudComponent implements OnInit {

  constructor(private noteService : NotesService) { }

  notes : Note[] = [];
  updateNote : Note;
  newNote : Note;

  displayUpdateForm : boolean = false;
  displayAddForm : boolean = false;

  ngOnInit(): void {
    this.setNotes();
    this.updateNote = new Note();
    this.newNote = new Note();
  }

  private setNotes(){
    this.noteService.getNotes().subscribe(notes => (this.notes = notes));
  }

  onAddNote(){
    this.noteService.addNote(this.newNote).subscribe(data => {
      alert("Added succesfully");
      console.log(data);
      this.displayAddForm = false;
      this.setNotes();
    });
  }

  onUpdateNote(){
    this.noteService.updateNote(this.updateNote).subscribe(
      data => {
        alert("Updated succesfully");
        console.log(data);
        this.displayUpdateForm = false;
        this.setNotes();
      }
    );
  }

  onDeleteNote(id:string) : void{
    this.noteService.deleteNote(id).subscribe(
      data => {
        alert("Deleted succesfully");
        console.log(data);
        this.setNotes();
      }
    );
  }

  onDisplayAddForm(): void{
    this.displayAddForm = !this.displayAddForm;
  }

  onDisplayUpdateForm(id: string): void{
    if(id != "")
      this.updateNote._id = id;


    this.displayUpdateForm = !this.displayUpdateForm;
  }
}
