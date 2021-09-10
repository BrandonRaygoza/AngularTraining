import { Component, OnInit } from '@angular/core';

import { Note } from '../../models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteService : NotesService) { }

  newNote : Note;

  ngOnInit(): void {
    this.newNote = new Note();
  }

  onAddNote(){
    this.noteService.addNote(this.newNote).subscribe(data => {
      alert("Added succesfully");
      this.newNote.title ="";
      this.newNote.content = "";
      console.log(data);
    });
  }

}
