import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from './course.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  providers: [CourseService],
  exports: [CommonModule, FormsModule]
})
export class CoreModule {}