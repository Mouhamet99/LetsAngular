import { HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  headers: string[] = [];

  constructor(private postService: PostsService) {
    
  }

  ngOnInit(){
    this.postService.getPosts().subscribe((resp) => {
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

  updatePost(post:Post){
    this.postService.updatePost(post).subscribe((res) => {
      console.log("Update Post response", res);
    })
  }

  deletePost(post:Post){
    this.postService.deletePost(post.id).subscribe(res=>{
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1)
      
      console.log("Delete post response", res)
    })
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
