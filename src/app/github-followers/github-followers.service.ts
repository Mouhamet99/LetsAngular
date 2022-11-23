import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Follower } from './github-followers.component';
@Injectable()
export class GithubFollowersService {
    private url: string = "  https://api.github.com/users/mouhamet99/followers"
    constructor(private http: HttpClient) {

    }

    getAll() {
        return this.http.get<Follower[]>(this.url).pipe(catchError(this.handleError))
    }

    private handleError(error: any) {
        return error
    }
}

