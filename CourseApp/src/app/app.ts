import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseRepository } from './repositories/course.repository';
import { Course } from './models/course';
import { CuAttrDirective } from './directives/cu-attr.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CuAttrDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private repository = inject(CourseRepository);
  private fb = inject(FormBuilder);

  courses = this.repository.getCourses();

  // Estado Ejercicio 12.1
  hoveredCourse: Course | null = null;
  selectedCourse: Course | null = null;

  // Formulario Ejercicio 12.2 (Solo Title y Seat)
  courseForm12: FormGroup;
  attemptedSubmit12 = true;

  // Formulario Ejercicio 13.1 (Title, Seat e Instructor)
  courseForm13: FormGroup;

  constructor() {
    // Validaciones Estrictas del 12.2
    this.courseForm12 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z\\s]+$')]],
      seatCapacity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });

    // Formulario del 13.1 (Instructor requerido)
    this.courseForm13 = this.fb.group({
      title: ['', Validators.required],
      seatCapacity: ['', Validators.required],
      instructorName: ['', Validators.required]
    });
  }

  onMouseEnter(course: Course): void { this.hoveredCourse = course; }
  onMouseLeave(): void { this.hoveredCourse = null; }
  selectCourse(course: Course): void { this.selectedCourse = course; }

  // Submit del 12.2
  onSubmit12(): void {
    this.attemptedSubmit12 = true;
    if (this.courseForm12.valid) {
      const nuevoId = this.courses.length > 0 ? Math.max(...this.courses.map(c => c.id)) + 1 : 1;
      this.repository.saveCourse(new Course(nuevoId, this.courseForm12.value.title, this.courseForm12.value.seatCapacity, 'TBD'));
      this.courses = this.repository.getCourses();
      this.courseForm12.reset();
      this.attemptedSubmit12 = false;
    }
  }

  // Submit del 13.1
  onSubmit13(): void {
    if (this.courseForm13.valid) {
      const nuevoId = this.courses.length > 0 ? Math.max(...this.courses.map(c => c.id)) + 1 : 1;
      this.repository.saveCourse(new Course(
        nuevoId,
        this.courseForm13.value.title,
        this.courseForm13.value.seatCapacity,
        this.courseForm13.value.instructorName
      ));
      this.courses = this.repository.getCourses();
      this.courseForm13.reset();
    }
  }
}