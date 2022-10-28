import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bootstrap-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isLiked') isLiked: boolean = false;
  @Input('likesCount') likesCount: number = 0;

  handleClick = () => {
    this.isLiked = !this.isLiked;
    this.likesCount =  this.isLiked ? 1: 0;
  }

}
