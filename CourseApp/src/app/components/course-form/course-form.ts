import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [ReactiveFormsModule], // <--- IMPRESCINDIBLE
  templateUrl: './course-form.html',
  styleUrl: './course-form.css'
})
export class CourseFormComponent {
  @Output() courseCreated = new EventEmitter<Course>();
  courseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      seatCapacity: ['', Validators.required],
      instructorName: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const nuevoId = Math.floor(Math.random() * 1000) + 100;
      this.courseCreated.emit(new Course(
        nuevoId,
        this.courseForm.value.title,
        this.courseForm.value.seatCapacity,
        this.courseForm.value.instructorName
      ));
      this.courseForm.reset();
    }
  }
}