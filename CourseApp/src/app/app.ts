import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseRepository } from './repositories/course.repository';
import { Course } from './models/course';
import { CourseTableComponent } from './components/course-table/course-table';
import { CourseFormComponent } from './components/course-form/course-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    CourseTableComponent,
    CourseFormComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private repository = inject(CourseRepository);
  private fb = inject(FormBuilder);

  courses = this.repository.getCourses();

  // Estado Ejercicio 12.1 (INTACTO)
  hoveredCourse: Course | null = null;
  selectedCourse: Course | null = null;

  // Formulario Ejercicio 12.2 (INTACTO)
  courseForm12: FormGroup;
  attemptedSubmit12 = false;

  // Formulario Ejercicio 13.1 (AHORA GESTIONADO POR EL HIJO, PERO MANTENEMOS LA REFERENCIA SI LA NECESITAS PARA OTROS EJERCICIOS)
  courseForm13: FormGroup;

  showTable: boolean = true; // Para el checkbox del apartado k

  constructor() {
    // Validaciones Estrictas del 12.2 (INTACTAS)
    this.courseForm12 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z\\s]+$')]],
      seatCapacity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });

    // Formulario del 13.1 (Lo mantenemos aquí por compatibilidad, aunque el hijo tiene su propia instancia)
    this.courseForm13 = this.fb.group({
      title: ['', Validators.required],
      seatCapacity: ['', Validators.required],
      instructorName: ['', Validators.required]
    });
  }

  // Métodos 12.1 (INTACTOS)
  onMouseEnter(course: Course): void { this.hoveredCourse = course; }
  onMouseLeave(): void { this.hoveredCourse = null; }
  selectCourse(course: Course): void { this.selectedCourse = course; }

  // Submit del 12.2 (INTACTO)
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

  // Submit del 13.1 (AHORA SE LLAMA DESDE EL HIJO, PERO LO DEJAMOS POR COMPATIBILIDAD)
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

  // NUEVOS MÉTODOS PARA EL EJERCICIO 15.1
  onCourseSelectedFromChild(course: Course): void {
    this.selectedCourse = course;
  }

  onCourseCreatedFromChild(newCourse: Course): void {
    this.repository.saveCourse(newCourse);
    this.courses = this.repository.getCourses();
  }
}