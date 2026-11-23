import { Directive, ElementRef, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DiscountService } from '../services/discount.service';

@Directive({
  selector: '[appDiscountColumn]',
  standalone: true
})
export class DiscountColumnDirective implements OnChanges {
  private el = inject(ElementRef<HTMLElement>);
  private discountService = inject(DiscountService);

  @Input('appDiscountColumn') discountInput: number | string | null | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['discountInput']) {
      const parsed = Number(this.discountInput ?? 0);
      this.discountService.setDiscount(Number.isNaN(parsed) ? 0 : parsed);
    }

    const currentDiscount = this.discountService.getDiscount();
    this.el.nativeElement.textContent = `${currentDiscount}%`;
  }
}