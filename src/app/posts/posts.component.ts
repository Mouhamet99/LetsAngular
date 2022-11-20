import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})

export class PostsComponent {
  posts: Post[] = [];
  constructor(postService: PostsService) {
    postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
