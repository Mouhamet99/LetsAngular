import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  getAuthors(){
    return [
      {name:  'Author 1', isActive: false},
      {name:  'Author 2', isActive: false},
      {name:  'Author 3', isActive: true},
      {name:  'Author 4', isActive: false},
      {name:  'Author 5', isActive: true}
    ]
  }
}
