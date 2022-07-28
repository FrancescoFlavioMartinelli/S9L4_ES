import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post!:Post

  @Output() editEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  editPost() {
    this.editEvent.emit(this.post.id)
  }

}
