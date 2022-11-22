import { HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { PostsService } from './posts.service';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];
    headers: string[] = [];
    error: any = [];

    constructor(private postService: PostsService) {}

    ngOnInit() {
        this.postService.getAll().subscribe({
            next: (resp) => {
                const keys = resp.headers.keys();
                this.headers = keys.map(
                    (key) => `${key}: ${resp.headers.get(key)}`
                );
                this.posts = [...resp.body!];
            },
        });
    }

    create(input: HTMLInputElement) {
        let post: any = { title: input.value, body: input.value };
        this.postService.create(post).subscribe({
            next: (res) => {
                post.id = res.id;
                this.posts.unshift(post);
            },
            error: (error: AppError) => {
                if (error instanceof BadInputError) {
                    this.error = error.originalError;
                } else throw error;
            },
        });
    }

    update(post: Post) {
        post.title = 'post update';
        this.postService.update(post).subscribe((res) => {
            console.log('Update Post response', res);
        });
    }

    delete(post: Post) {
        this.postService.delete(post.id).subscribe({
            next: (res) => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
                console.log('Delete post response', res);
            },
            error: (error: AppError) => {
                if (error instanceof NotFoundError)
                    this.error = error.originalError;
                else throw error;
            },
        });
    }

    badDelete(post: Post) {
        this.postService.badDelete(post.id).subscribe({
            next: (res) => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
            },
            error: (error: AppError) => {
                if (error instanceof NotFoundError) {
                    this.error = error.originalError;
                    alert('this post has already been deleted');
                } else throw error;
            },
        });
    }
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
