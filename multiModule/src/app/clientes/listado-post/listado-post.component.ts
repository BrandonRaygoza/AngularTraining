import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-listado-post',
  templateUrl: './listado-post.component.html',
  styleUrls: ['./listado-post.component.css']
})
export class ListadoPostComponent implements OnInit {

  constructor(private postService : PostService) { }

  posts : Post[] = [];

  ngOnInit(): void {
    /*An Observable instance begins publishing values only when someone subscribes to it. You subscribe by calling the subscribe() method of the instance, passing an observer object to receive the notifications.
    Practicament el subscribe ejecuta el observer */
    this.postService.getPosts().subscribe(posts => (this.posts = posts));
  }

  /*When the server responds successfully with the newly added post, the component adds that post to the displayed posts list. */
  onAddPost() : void{

  }

}
