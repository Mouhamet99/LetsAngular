import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isSelected') isFavorite: boolean = true;
  @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite
    this.click.emit({updateAt: new Date().toISOString()})
  }

}
export default interface FavoriteChangeEventArgs {
    updatedAt: string
} 
