import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Post } from '../models/post';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url : string = "https://jsonplaceholder.typicode.com/posts";

  // In requests, (such as POST or PUT), the client tells the server what type of data is actually sent.
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type" : "application/json"
    })
  };

  // Dependecy injection
  constructor(private httpClient : HttpClient) { }

  getPosts(): Observable<Post []> {
    let posts: Observable<Post[]> =
    this.httpClient
      .get<Post[]>(this.url)
      .pipe(catchError(this.handleError));

    return posts;
  }

  /*The method takes a resource URL and two additional parameters:

    body - The data to POST in the body of the request.
    options - An object containing method options which, in this case, specify required headers.
 */
  addPost(post : Post) : Observable<Post>{

    return this.httpClient.post<Post>(this.url, post, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /*An app can send PUT requests using the HTTP client service. The following PostService example, like the POST example, replaces a resource with updated data. */
  updatePost(post : Post) : Observable<Post>{

    return this.httpClient.put<Post>(this.url, post, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /* This application deletes a post  with the HttpClient.delete method by passing the post's id in the request URL.*/
  deletePost(idPost : number) : Observable<Post>{

    const url = `${this.url}/${idPost}`;
    return this.httpClient.delete<Post>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
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
