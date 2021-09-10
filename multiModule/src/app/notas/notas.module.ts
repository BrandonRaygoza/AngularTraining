import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { NotasCrudComponent } from './notas-crud/notas-crud.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { DeleteNodeComponent } from './delete-node/delete-node.component';
import { UpdateNodeComponent } from './update-node/update-node.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';


@NgModule({
  declarations: [NotasCrudComponent, AddNoteComponent, DeleteNodeComponent, UpdateNodeComponent, ViewNotesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [NotasCrudComponent]
})
export class NotasModule { }
