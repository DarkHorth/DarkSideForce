import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';

import { AuthorsService } from './authors.service';
import { CoursesServices } from './courses.service';
@NgModule( {
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorsService,
    CoursesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
