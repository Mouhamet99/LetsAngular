import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from './posts.component';

@Injectable()
export class PostsService {
   
    constructor(private http: HttpClient) {

    }

    getPosts() {
        // const  options = {
        //     observe: 'body' | 'events' | 'response',
        //     responseType: 'arraybuffer'|'blob'|'json'|'text',
        // }
        return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts')
    }

}