import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCuAttr]',
  standalone: true
})
export class CuAttrDirective implements OnInit {
  // b) Propiedad classList por defecto
  @Input() classList: string[] = ['bg-info', 'text-white'];
  
  // d) Atributo extra bg-success
  @Input() bgSuccess: string = '';
  
  // f) Atributo bg-danger directo
  @Input() bgDanger: string = '';
  
  // g) Input dinámico para plazas
  @Input() seatCapacity: number | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const tieneFondoDinamico = 
      this.bgSuccess !== '' || this.bgDanger !== '' || this.seatCapacity !== null;

    // Si hay fondo dinámico, solo aplicamos text-white para evitar colisiones con Bootstrap
    const base = tieneFondoDinamico ? ['text-white'] : this.classList;
    base.forEach(clase => this.renderer.addClass(this.el.nativeElement, clase));

    if (this.bgSuccess) {
      this.renderer.addClass(this.el.nativeElement, this.bgSuccess);
    }

    if (this.bgDanger) {
      this.renderer.addClass(this.el.nativeElement, this.bgDanger);
    }

    // g) Lógica condicional: <15 verde, >=15 rojo
    if (this.seatCapacity !== null) {
      const claseDinamica = this.seatCapacity < 15 ? 'bg-success' : 'bg-danger';
      this.renderer.addClass(this.el.nativeElement, claseDinamica);
    }
  }
}