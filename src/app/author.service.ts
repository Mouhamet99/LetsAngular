import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  getAuthors(){
    return [
      {name:  'Author 1', isActive: false, books: 5, rate: 12300, date: new Date(), benefit: 1230.24},
      {name:  'Author 2', isActive: false, books: 3, rate: 3300, date: new Date(), benefit: 230},
      {name:  'Author 3', isActive: true, books: 2, rate: 500, date: new Date(), benefit: 234},
      {name:  'Author 4', isActive: false, books: 5, rate: 1200, date: new Date(), benefit: 23.24},
      {name:  'Author 5', isActive: true, books: 1, rate: 300, date: new Date(), benefit: 103.24}
    ]
  }
}
