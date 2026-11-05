import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { COURSES } from '../data/courses.data';

@Injectable({
  providedIn: 'root'
})
export class CourseRepository {
  // Copia del data source para no modificar la constante original
  private courses: Course[] = [...COURSES];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourse(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  saveCourse(course: Course): void {
    const index = this.courses.findIndex(c => c.id === course.id);
    if (index >= 0) {
      // Si ya existe, lo actualiza
      this.courses[index] = course;
    } else {
      // Si no existe, lo añade
      this.courses.push(course);
    }
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter(c => c.id !== id);
  }
}