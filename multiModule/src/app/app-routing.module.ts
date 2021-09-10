import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotasCrudComponent } from './notas/notas-crud/notas-crud.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { ListadoPostComponent } from './clientes/listado-post/listado-post.component';
import { AddNoteComponent } from './notas/add-note/add-note.component';
import { UpdateNodeComponent } from './notas/update-node/update-node.component';
import { ViewNotesComponent } from './notas/view-notes/view-notes.component';



const routes : Routes = [
  {path: "notes",         component: NotasCrudComponent},
  {path: "notesList",         component: ViewNotesComponent},
  {path: "addNote",       component: AddNoteComponent},
  {path: "updateNote",  component: UpdateNodeComponent},
  {path: "posts",       component: ListadoPostComponent},
  {path: "facturas",    component: ListadoFacturasComponent},
  {path: "clientes",    component: ListadoClientesComponent}
];

@NgModule({
  //declarations: [],
  imports: [
    //CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
