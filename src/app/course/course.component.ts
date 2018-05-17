import { Component, OnInit } from '@angular/core';
import { CoursesServices } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'List of Courses ';
  courses ;
  constructor(services: CoursesServices ) {
    this.courses = services.getCourses();
  }

  ngOnInit() {
  }

}
