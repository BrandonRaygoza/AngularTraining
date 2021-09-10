import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Note } from '../../models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {

  constructor(private noteService : NotesService, private router: Router) { }

  notes : Note[] = [];

  ngOnInit(): void {
    this.setNotes();
  }

  private setNotes(){
    this.noteService.getNotes().subscribe(notes => (this.notes = notes));
  }

  onGoToUpdateNote(idNote:string){
    this.router.navigate(['/updateNote'], { queryParams: { id: idNote } });
  }
}
