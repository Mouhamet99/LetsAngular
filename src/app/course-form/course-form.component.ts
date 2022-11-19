import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {

categories: Array<CourseCategory> = [
  {id:1, name: 'Frontend'},
  {id:2, name: 'Backend'},
  {id:3, name: 'FullStack'}
];

submit(form: NgForm){
  console.log(form);
}

}
export default interface CourseCategory{
  id: number, name: string
}
