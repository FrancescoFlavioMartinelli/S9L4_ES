import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {

  post!:Post;

  sub!:Subscription;

  constructor(private router:ActivatedRoute, private postSrv:PostService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      let id = +params["id"]
      this.post = this.postSrv.getPostById(id)
    })
  }

  editPost(){
    // attivare/disattivare l'elemento nel service
    this.postSrv.editPost(this.post.id, !this.post.active).then(()=>{
      this.post = this.postSrv.getPostById(this.post.id)
    })
  }

}
