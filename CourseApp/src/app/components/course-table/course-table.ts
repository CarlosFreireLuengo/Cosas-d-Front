import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course';
import { CuAttrDirective } from '../../directives/cu-attr.directive';

@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [CommonModule, CuAttrDirective],
  templateUrl: './course-table.html',
  styleUrl: './course-table.css'
})
export class CourseTableComponent {
  // h) Propiedad input para recibir los cursos desde el padre
  @Input() courses: Course[] = [];
  
  // j) Propiedad output para avisar al padre cuando se selecciona un curso
  @Output() courseSelected = new EventEmitter<Course>();

  selectedCourse: Course | null = null;

  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.courseSelected.emit(course);
  }
}