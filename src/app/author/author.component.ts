import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  // templateUrl: './author.component.html',
  template: `
  <h1>{{getAuthorsNumbers() +' Authors'}}</h1>
    <ul>
      <li *ngFor='let author of authors' class="m-2"  (click)="onLiClicked()">
          {{ author.name }}
          <button class="btn btn-sm  btn-info" (click)="onCall($event)">Call</button>
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
  onLiClicked(){
    console.log("li click");
  }
  onCall($event: Event){
    $event.stopPropagation();
    console.log("btn click", $event.target);
  }

}
interface author{
  name: string,
  isActive: boolean
}
