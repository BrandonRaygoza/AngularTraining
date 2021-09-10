import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Note } from '../../models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-update-node',
  templateUrl: './update-node.component.html',
  styleUrls: ['./update-node.component.css']
})
export class UpdateNodeComponent implements OnInit {

  constructor(private noteService : NotesService, private route: ActivatedRoute) { }

  updateNote : Note;

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.updateNote = new Note();
    this.route.queryParams.subscribe(params =>  {

      if(params != null || params!= undefined){
        console.log(params);
        this.updateNote._id = params.id;
      }

    });
  }

  onUpdateNote(){
    this.noteService.updateNote(this.updateNote).subscribe(
      data => {
        alert("Updated succesfully");
        console.log(data);
      }
    );
  }

}
