import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.css']
})
export class PostAttiviComponent implements OnInit {

  posts!:Post[]

  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    this.posts = this.postSrv.getPosts(true);
  }

  disattivaPost(id:number) {
    //disattivare sul service 
    this.postSrv.editPost(id, false).then(()=>{
      //rimuovere l'elemento dall'array
      this.posts = this.posts.filter(e=>e.id != id)
    })
  }

}
