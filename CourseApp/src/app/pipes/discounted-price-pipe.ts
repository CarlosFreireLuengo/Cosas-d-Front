import { Pipe, PipeTransform, inject } from '@angular/core';
import { DiscountService } from '../services/discount.service';

@Pipe({
  name: 'discountedPrice',
  pure: false,
  standalone: true
})
export class DiscountedPricePipe implements PipeTransform {
  private discountService = inject(DiscountService);

  transform(price: number | null | undefined, discount?: number): number {
    const activeDiscount = discount !== undefined ? discount : this.discountService.getDiscount();
    return this.discountService.applyDiscount(price, activeDiscount);
  }
}