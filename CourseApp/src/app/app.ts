import { Component, inject } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseRepository } from './repositories/course.repository';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private repository = inject(CourseRepository);
  private fb = inject(FormBuilder);

  courses = this.repository.getCourses();

  // Estado para Ejercicio 12.1
  hoveredCourse: Course | null = null;
  selectedCourse: Course | null = null;

  // Estado para Ejercicio 12.2
  courseForm: FormGroup;
  attemptedSubmit = false;

  constructor() {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z\\s]+$')]],
      seatCapacity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  // Métodos 12.1: Tooltip y Selección
  onMouseEnter(course: Course): void {
    this.hoveredCourse = course;
  }

  onMouseLeave(): void {
    this.hoveredCourse = null;
  }

  selectCourse(course: Course): void {
    this.selectedCourse = course;
  }

  // Métodos 12.2: Envío del formulario
  onSubmit(): void {
    this.attemptedSubmit = true;
    
    if (this.courseForm.valid) {
      const newCourse = new Course(
        this.courses.length + 1,
        this.courseForm.value.title,
        this.courseForm.value.seatCapacity,
        'Instructor Asignado'
      );
      
      this.repository.saveCourse(newCourse);
      this.courses = this.repository.getCourses();
      this.courseForm.reset();
      this.attemptedSubmit = false;
    }
  }
}