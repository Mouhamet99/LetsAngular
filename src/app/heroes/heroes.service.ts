import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Hero } from './hero';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
@Injectable()
export class HeroService {
    private heroesUrl: string = "https://jsonplaceholder.typicode.com/users"

    constructor(private http: HttpClient) { }

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


    getHeroes() {
        return this.http.get<Hero[]>(this.heroesUrl).pipe(catchError(this.handleError));;
    }

}
