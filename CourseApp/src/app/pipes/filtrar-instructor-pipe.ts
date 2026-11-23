import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'filtrarInstructor',
  pure: false,
  standalone: true,
})
export class FiltrarInstructorPipe implements PipeTransform {
  transform(courses: Course[] | null | undefined, selectedInstructor: string | null | undefined): Course[] {
    if (!courses) {
      return [];
    }
    if (!selectedInstructor || selectedInstructor === 'ALL') {
      return courses;
    }
    return courses.filter(
      (course) => (course.instructorName ?? '').trim().toLowerCase() === selectedInstructor.trim().toLowerCase()
    );
  }
}