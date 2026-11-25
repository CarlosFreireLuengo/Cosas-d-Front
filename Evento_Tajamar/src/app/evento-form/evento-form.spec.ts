import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventoForm } from './evento-form';

describe('EventoForm', () => {
  let component: EventoForm;
  let fixture: ComponentFixture<EventoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EventoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
