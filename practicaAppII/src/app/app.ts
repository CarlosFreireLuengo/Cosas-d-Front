import { Component } from '@angular/core';
import { Course } from './model/course.model';
import { CourseService } from './core/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css'],
  standalone: false
})
export class AppComponent {
  editingCourse: Course | null = null;
  isNewCourse = false;

  constructor(private courseService: CourseService) {}

  get courses(): Course[] {
    return this.courseService.getCourses();
  }

  startEdit(course: Course): void {
    this.isNewCourse = false;
    this.editingCourse = { ...course };
  }

  startCreate(): void {
    this.isNewCourse = true;
    this.editingCourse = new Course(undefined, '', 0, 0, '');
  }

  saveCourse(): void {
    if (this.editingCourse) {
      if (this.courseService.saveCourse(this.editingCourse)) {
        this.editingCourse = null;
        this.isNewCourse = false;
      }
    }
  }

  cancelEdit(): void {
    this.editingCourse = null;
    this.isNewCourse = false;
  }

  deleteCourse(id?: number): void {
    if (id != null) {
      this.courseService.deleteCourse(id);
      if (this.editingCourse?.id === id) {
        this.editingCourse = null;
      }
    }
  }
}