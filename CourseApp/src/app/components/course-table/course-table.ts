import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course';
import { CuAttrDirective } from '../../directives/cu-attr.directive';
import { DiscountService } from '../../services/discount.service';
import { DiscountedPricePipe } from '../../pipes/discounted-price-pipe';
import { DiscountColumnDirective } from '../../directives/discount-column.directive';

@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    CuAttrDirective,
    DiscountedPricePipe,
    DiscountColumnDirective
  ],
  templateUrl: './course-table.html',
  styleUrl: './course-table.css'
})
export class CourseTableComponent {
  private discountService = inject(DiscountService);

  // h) Propiedad input para recibir los cursos desde el padre
  @Input() courses: Course[] = [];
  
  // j) Propiedad output para avisar al padre cuando se selecciona un curso
  @Output() courseSelected = new EventEmitter<Course>();

  selectedCourse: Course | null = null;

  // Input de descuento enlazado al servicio (Ejercicio 17.1)
  discountValue: number = this.discountService.getDiscount();

  onDiscountChange(value: number | string): void {
    const parsed = Number(value);
    this.discountValue = Number.isNaN(parsed) ? 0 : parsed;
    this.discountService.setDiscount(this.discountValue);
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.courseSelected.emit(course);
  }
}