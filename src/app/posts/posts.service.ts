import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Injectable()
export class PostsService extends DataService{
    override url :string= 'http://jsonplaceholder.typicode.com/posts'
    constructor(http:HttpClient) {
        super(http)
    }

}
