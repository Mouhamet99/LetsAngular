import { HttpHeaderResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: Post[] = [];
  headers:string[] =[];

  constructor(postService: PostsService) {
    postService.getPosts().subscribe((resp) => {
      
      const keys = resp.headers.keys();
      this.headers = keys.map((key) => `${key}: ${resp.headers.get(key)}`);
      
      this.posts = [...resp.body! ];
    });
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
