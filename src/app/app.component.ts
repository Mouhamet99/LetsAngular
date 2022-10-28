import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body : 'Hello World Angular',
    isLiked: false,
    likesCount: 0
  }
  handleCounter(isLiked: boolean){
    this.tweet.likesCount = isLiked? 1: 0; 
  }

}
