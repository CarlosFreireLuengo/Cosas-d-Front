import { Component } from '@angular/core';
import { EventoForm } from './evento-form/evento-form';

@Component({
  selector: 'app-root',
  imports: [EventoForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}