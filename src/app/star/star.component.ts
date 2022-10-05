import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  rate: boolean = false;
  number: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  
  onRate($event: any){
    let level = $event.currentTarget.dataset.level as number;
    this.rate = (this.rate && this.number < level ) ? true : !this.rate;
    this.number = level;
  }

}
