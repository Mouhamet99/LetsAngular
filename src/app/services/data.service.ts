import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { Post } from '../posts/posts.component';

@Injectable()
export class DataService {
    protected url: string = "";
    constructor(private http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        if (error.status === 400) {
            return throwError(() => new BadInputError(error.error));
        }

        if (error.status === 404) {
            return throwError(() => new NotFoundError('Post not Found'));
        }

        // Return an observable with a user-facing error message.
        return throwError(
            () => new AppError('Something bad happened. Please, try again')
        );
    }

    getAll() {
        return this.http
            .get<Post[]>(this.url, { observe: 'response' })
            .pipe(catchError(this.handleError));
    }

    create(ressource: { title: string }): Observable<{ id: number }> {
        return this.http.post<Post>(this.url, ressource).pipe(catchError(this.handleError));;
    }

    update(ressource: any): Observable<Post> {
        return this.http.put<Post>(this.url + '/' + ressource.id, ressource).pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<unknown> {
        return this.http
            .delete(this.url + '/' + id)
            .pipe(catchError(this.handleError));
    }

    badDelete(id: number): Observable<unknown> {
        return this.http.delete(this.url).pipe(catchError(this.handleError));
    }
}
