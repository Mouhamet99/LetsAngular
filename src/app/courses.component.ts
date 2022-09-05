import { Component} from '@angular/core'
import { CoursesService } from './courses.service';
@Component({
   selector: 'courses',
   template: `
   <h1>{{ getTitle() }}</h1>
   <hr>
   <ul>
      <li *ngFor="let course of courses">
         {{ course }}
      </li>
   </ul>
   `
})
export class CoursesComponent {
   title = 'List of Courses'
   courses ;
   constructor(service: CoursesService){ 
      this.courses = service.getCourse()
   }
   getTitle() { return this.title}
};
