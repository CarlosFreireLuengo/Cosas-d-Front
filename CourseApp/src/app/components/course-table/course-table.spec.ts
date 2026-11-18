import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseTable } from './course-table';

describe('CourseTable', () => {
  let component: CourseTable;
  let fixture: ComponentFixture<CourseTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTable],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
