import { Component, OnInit, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

function fechaFuturaValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const [year, month, day] = String(control.value).split('-').map(Number);
    const fechaSeleccionada =
      year && month && day ? new Date(year, month - 1, day) : new Date(control.value);

    fechaSeleccionada.setHours(0, 0, 0, 0);

    return fechaSeleccionada > hoy ? null : { fechaNoFutura: true };
  };
}

function edadOpcionalMayorQueCeroValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value;
    if (valor === null || valor === undefined || valor === '') {
      return null;
    }
    const numero = Number(valor);
    return !Number.isNaN(numero) && numero > 0 ? null : { edadInvalida: true };
  };
}

@Component({
  selector: 'app-evento-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './evento-form.html',
  styleUrl: './evento-form.css',
})
export class EventoForm implements OnInit {
  private fb = inject(FormBuilder);

  eventoForm!: FormGroup;
  datosEnviados: unknown = null;

  ngOnInit(): void {
    this.eventoForm = this.fb.group({
      infoEvento: this.fb.group({
        nombreEvento: ['', [Validators.required, Validators.minLength(5)]],
        fechaEvento: ['', [Validators.required, fechaFuturaValidator()]],
        ubicacion: ['', [Validators.required]],
      }),
      invitados: this.fb.array([], [Validators.minLength(2)]),
    });
  }

  get infoEvento(): FormGroup {
    return this.eventoForm.get('infoEvento') as FormGroup;
  }

  get invitados(): FormArray {
    return this.eventoForm.get('invitados') as FormArray;
  }

  crearInvitado(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      edad: [null, [edadOpcionalMayorQueCeroValidator()]],
    });
  }

  agregarInvitado(): void {
    this.invitados.push(this.crearInvitado());
    this.invitados.markAsTouched();
  }

  eliminarInvitado(index: number): void {
    this.invitados.removeAt(index);
    this.invitados.markAsTouched();
  }

  esInvalido(control: AbstractControl | null): boolean {
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  onSubmit(): void {
    if (this.eventoForm.invalid || this.invitados.length < 2) {
      this.eventoForm.markAllAsTouched();
      return;
    }

    this.datosEnviados = this.eventoForm.value;
    console.log('Evento registrado:', this.eventoForm.value);
  }
}