import { Component, inject } from '@angular/core';
import { CourseRepository } from './repositories/course.repository';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private repository = inject(CourseRepository);
  courses = this.repository.getCourses();
}