import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses :Course[] = [];
  viewMode: string = 'map';
  sexe: string = 'f';

  add(){
    this.courses.push({id: 4, title: "Course 4", author: "Rokhaya"})
  }

  onRemove(course: any){
    console.log(course);
    
    let index = this.courses.indexOf(course)
    this.courses.splice(index, 1)
  }

  loadCourses(){
    this.courses = [
      {id: 1, title: "Course 1", author: "Epsilon"},
      {id: 2, title: "Course 2", author: "Soso"},
      {id: 3, title: "Course 1", author: "Libs"}
    ];
  }

  trackCourses(index:any, course:any){
    return course? course.id : undefined;
  }

}
export default interface Course{
  "id": number, "title": String, "author": String
}

