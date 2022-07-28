import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts!:Post[]
  private url = "http://localhost:3000/posts"

  constructor() {
    fetch(this.url).then(res=>res.json()).then((res:Post[])=>{this.posts = res})
  }

  getPosts(a:boolean) {
    return this.posts.filter(e=>e.active==a)
  }

  editPost(id:number, a:boolean) {
    return fetch(this.url+"/"+id, {
      method:"PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({active: a})
    }).then(()=>{
      this.posts = this.posts.map((e)=>{
        if(e.id == id){
          e.active = a
        }
        return e
      })
    })
  }

  getPostById(id:number) {
    return this.posts.filter(e=>e.id==id)[0]
  }

}
