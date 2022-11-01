import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {title: "Course 1", author: "Epsilon"},
    {title: "Course 2", author: "Soso"},
    {title: "Course 1", author: "Libs"}
  ];

  add(){
    this.courses.push({title: "Course 4", author: "Rokhaya"})
  }

  onRemove(course: any){
    console.log(course);
    
    let index = this.courses.indexOf(course)
    this.courses.splice(index, 1)
  }

}
export default interface Course{
  "title": String, "author": String
}

