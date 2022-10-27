import { Component } from '@angular/core';
import FavoriteChangeEventArgs from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World Angular'
  post = {
    title : 'Hello World Angular',
    isFavorite: false
  }

  onFavoriteChange(outputData: FavoriteChangeEventArgs){
    console.log("updated ", outputData);
  }
}
