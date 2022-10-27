import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles:[
    
    `
      p{
        background-color:green;
        font-weight: bold;
        font-size:1.2em;
      }
      `
    ,
    ],
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isSelected') isFavorite: boolean = true;
  @Output('change') click = new EventEmitter();


  onClick() {
    this.isFavorite = !this.isFavorite
    this.click.emit({updateAt: new Date().toISOString()})
  }

}
export default interface FavoriteChangeEventArgs {
    updatedAt: string
} 
