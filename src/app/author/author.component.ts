import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  // templateUrl: './author.component.html',
  template: `
  <h1>{{getAuthorsNumbers() +' Authors'}}</h1>
    <ul>
      <li *ngFor='let author of authors' class="m-2" [style.color]=" author.isActive ? 'green': 'red' ">
          {{ author.name }}
          <button class="btn btn-sm  btn-info" [class.active]="author.isActive">{{author.isActive}}</button>
      </li>
    </ul> 
  `,
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  authors : author[] = [];
  constructor(service: AuthorService) { 
    this.authors = service.getAuthors()
  }

  ngOnInit(): void {
  }

  getAuthorsNumbers(){
    return this.authors.length
  }

}
interface author{
  name: string,
  isActive: boolean
}
