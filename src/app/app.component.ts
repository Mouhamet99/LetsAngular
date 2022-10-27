import { Component } from '@angular/core';

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

  onFavoriteChange(outputData: string){
    console.log("outputData", outputData);
  }
}
