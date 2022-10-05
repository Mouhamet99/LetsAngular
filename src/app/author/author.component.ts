import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  // templateUrl: './author.component.html',
  template: `
  <h1>{{getAuthorsNumbers() +' Authors'}}</h1>
  <input class="form-control" [(ngModel)]="email" (keyup.enter)="onKeyUp()" placeholder="user@me.com"/>
  <input class="form-control" [(ngModel)]="name" (keyup.enter)="onKeyUp()" placeholder="username"/>
    <ul>
      <li *ngFor='let author of authors' class="m-2"  (click)="onLiClicked()">
          {{ author.name }}
          <button class="btn btn-sm  btn-info">Call</button>
      </li>
    </ul> 
  `,
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  email :string = "";
  name:string = "";
  authors : author[] = [];
  constructor(service: AuthorService) { 
    this.authors = service.getAuthors()
  }

  ngOnInit(): void {
  }

  getAuthorsNumbers(){
    return this.authors.length
  }
  onLiClicked(){
    console.log("li click");
  }
  onKeyUp() { 
    console.log(this.email);
    console.log(this.name);
  }

}
interface author{
  name: string,
  isActive: boolean
}
