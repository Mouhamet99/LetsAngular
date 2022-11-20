import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from './posts.component';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';

@Injectable()
export class PostsService {
    private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            alert('A client-side or network error occurred: check console');
            console.log('An error occurred: ' + error.error);
        } else if (error.status === 400){
            return throwError(
                () => new BadInputError(error.error)
            );
        } else if (error.status === 404){
            return throwError(
                () => new NotFoundError('Post not Found')
            );
        } else {
            // this.form.setErrors(error)
            alert(
                `The backend returned an unsuccessful response code: check console`
            );
            console.error(
                `Backend returned code ${error.status}, body was: `,
                error.error
            );
        }

        // Return an observable with a user-facing error message.
        return throwError(
            () => new AppError('Something bad happened. Please, try again')
        );
    }

    getPosts() {
        // const  options = {
        //     observe: 'body' | 'events' | 'response',
        //     responseType: 'arraybuffer'|'blob'|'json'|'text',
        // }
        return this.http
            .get<Post[]>(this.url, { observe: 'response' })
            .pipe(catchError(this.handleError));
    }

    createPost(post: { title: string }): Observable<{ id: number }> {
        return this.http.post<Post>(this.url, post);
    }

    updatePost(post: Post): Observable<Post> {
        post.title = 'post update';
        return this.http.put<Post>(this.url + '/' + post.id, post);
    }

    deletePost(id: number): Observable<unknown> {
        return this.http.delete(this.url + '/' + id).pipe(catchError(this.handleError));
    }
    
    badDeletePost(id: number): Observable<unknown> {
        return this.http.delete(this.url).pipe(catchError(this.handleError));
    }
   
}
