export class Course {
  constructor(
    public id?: number,
    public title?: string,
    public seatCapacity?: number,
    public price?: number,
    public instructorName?: string
  ) {}
}

export const INITIAL_COURSES: Course[] = [
  new Course(1, 'Agile', 20, 274.00, 'John Jones'),
  new Course(2, 'C#', 15, 345.23, 'John Jones'),
  new Course(3, 'Angular', 13, 452.00, 'Ross Miller'),
  new Course(4, 'Java', 10, 232.20, 'Alex Walker'),
  new Course(5, 'SQL', 10, 157.00, 'Ross Miller')
];