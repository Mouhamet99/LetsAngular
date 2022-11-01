import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World Angular';
  courses = [
    {title: "Course 1", author: "Epsilon"},
    {title: "Course 2", author: "Soso"},
    {title: "Course 1", author: "Libs"}
  ];
  viewMode :string = "map";

}

