import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratioAsientos',
  standalone: true,
})
export class RatioAsientosPipe implements PipeTransform {
  transform(seatCapacity: number | null | undefined, ratio: number | null | undefined): number {
    if (!seatCapacity || !ratio || ratio <= 0) {
      return 0;
    }
    return Math.round(seatCapacity * ratio);
  }
}