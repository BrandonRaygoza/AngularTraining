import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Note } from '../models/note';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url : string = "http://localhost:3000/notes";
  // In requests, (such as POST or PUT), the client tells the server what type of data is actually sent.
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type" : "application/json"
    })
  };

  constructor(private httpClient : HttpClient) { }

  getNotes() : Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.url).pipe(catchError(this.handleError));;
  }

  getNoteById(id:number) : Observable<Note>{

    const endpoint = `${this.url}/${id}`;
    return this.httpClient.get<Note>(endpoint).pipe(catchError(this.handleError));;
  }

  addNote(note: Note) : Observable<Note>{

    return this.httpClient.post<Note>(this.url, note, this.httpOptions).pipe(catchError(this.handleError));;
  }

  updateNote(note : Note): Observable<Note>{

    const endpoint =`${this.url}/${note._id}`;
    return this.httpClient.put<Note>(endpoint, note, this.httpOptions).pipe(catchError(this.handleError));;
  }

  deleteNote(id:string): Observable<Note>{
    const endpoint = `${this.url}/${id}`;
    return this.httpClient.delete<Note>(endpoint, this.httpOptions).pipe(catchError(this.handleError));;
  }

  handleError(error: HttpErrorResponse){
    let msg = " Unknow error";
    // Los errores en client side son: 400
    // Los errores en server side son: 500

    if(error.error instanceof ErrorEvent){
      msg = `Error: ${error.error.message}`;  // Client side
    }else{
      msg = `Error: ${error.status} ${error.message}`; // Server side
    }

    return throwError(msg);
  }


}
