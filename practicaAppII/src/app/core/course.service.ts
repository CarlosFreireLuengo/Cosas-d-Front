import { Injectable } from '@angular/core';
import { Course, INITIAL_COURSES } from '../model/course.model';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';

@Injectable()
export class CourseService {
  private courses: Course[] = INITIAL_COURSES.map(c => ({ ...c }));

  constructor(private messageService: MessageService) {}

  getCourses(): Course[] {
    return this.courses;
  }

  getCourse(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  saveCourse(course: Course): boolean {
    if (!course.title || !course.instructorName) {
      this.messageService.reportMessage(
        new Message('Title and Instructor Name are required.', true)
      );
      return false;
    }

    if (course.id == null) {
      const nextId = this.courses.length > 0
        ? Math.max(...this.courses.map(c => c.id ?? 0)) + 1
        : 1;
      const newCourse = new Course(
        nextId,
        course.title,
        Number(course.seatCapacity ?? 0),
        Number(course.price ?? 0),
        course.instructorName
      );
      this.courses.push(newCourse);
      this.messageService.reportMessage(new Message(`Course "${newCourse.title}" created.`));
      return true;
    } else {
      const idx = this.courses.findIndex(c => c.id === course.id);
      if (idx >= 0) {
        this.courses[idx] = new Course(
          course.id,
          course.title,
          Number(course.seatCapacity ?? 0),
          Number(course.price ?? 0),
          course.instructorName
        );
        this.messageService.reportMessage(new Message(`Course "${course.title}" updated.`));
        return true;
      }
    }

    return false;
  }

  deleteCourse(id: number): void {
    const idx = this.courses.findIndex(c => c.id === id);
    if (idx >= 0) {
      const removed = this.courses[idx];
      this.courses.splice(idx, 1);
      this.messageService.reportMessage(new Message(`Course "${removed.title}" deleted.`));
    }
  }
}