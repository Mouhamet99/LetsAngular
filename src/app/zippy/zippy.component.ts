import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  isCollapsed: boolean = false;
  @Input() title: string = ''
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isCollapsed = !this.isCollapsed;
  }

}
