import { Component, OnInit } from '@angular/core';
import { Post } from './../interfaces/interfaces';
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: 'Wow', thought: "I can't believe I got this cool new job!" },
    { title: 'Aww', thought: 'My sister just got married. Congrats!' },
    {
      title: 'OMG',
      thought: 'What an amazing game! Coming right down to the wire!',
    },
  ];
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  handleSubmit(post: Post): void {
    this.posts.push(post);
    this.show = false;
  }
  handleDelete(i: number) {
    this.posts.splice(i, 1);
  }
  showForm(): void {
    this.show = true;
  }
}
