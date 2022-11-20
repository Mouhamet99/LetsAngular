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
  headers: string[] = [];

  constructor(private postService: PostsService) {
    postService.getPosts().subscribe((resp) => {
      const keys = resp.headers.keys();
      this.headers = keys.map((key) => `${key}: ${resp.headers.get(key)}`);

      this.posts = [...resp.body!];
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value, body: input.value };
    this.postService.createPost(post).subscribe((res) => {
      post.id = res.id;
      this.posts.unshift(post);
    });
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
