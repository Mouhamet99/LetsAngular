import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  // templateUrl: './author.component.html',
  template: `
  <h1>{{getAuthorsNumbers() +' Authors'}}</h1>
  <div  class="row col-4">

    <input class="form-control" [(ngModel)]="email" (keyup.enter)="onKeyUp()" placeholder="user@me.com"/>
    <input class="form-control" [(ngModel)]="name" (keyup.enter)="onKeyUp()" placeholder="username"/>
  </div>
    <ul>
      <li *ngFor='let author of authors' class="m-2"  (click)="onLiClicked()">
          {{ author.name }}
          <button class="btn btn-sm  btn-info">Call</button>

          <span class="mx-2"> since {{author.date | date:'shortDate'}}</span>
          <span class="mx-2">{{author.books | number}} books</span>
          <span class="mx-2">{{author.rate}} rates</span>
          <span class="mx-2"> benefit: {{author.benefit | currency:'USD':'symbol':'3.2-2'}}</span>
      </li>
    </ul> 

    <p>{{paragraph | summary}}</p>
  `,
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {

  paragraph: string = "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ipsam ipsa optio, ullam aut corporis voluptate a iure accusantium earum voluptatum dolores velit neque numquam labore dolore voluptas consequuntur expedita ut. Quos nobis alias accusantium consequuntur similique maiores, atque expedita temporibus rem mollitia voluptas suscipit quis officia? Laboriosam, architecto voluptatem!  ";


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
  isActive: boolean,
  date: Date,
  rate: number,
  books: number,
  benefit: number
}
