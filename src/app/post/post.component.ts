import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from './../interfaces/interfaces';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  handleDelete() {
    this.deleted.emit();
  }
}
