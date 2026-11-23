import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  // Porcentaje de descuento (ej. 0, 10, 20, 50)
  private discountPercent: number = 0;

  getDiscount(): number {
    return this.discountPercent;
  }

  setDiscount(discount: number): void {
    const validDiscount = Number(discount);
    this.discountPercent = Number.isNaN(validDiscount) ? 0 : Math.max(0, Math.min(100, validDiscount));
  }

  applyDiscount(price: number | null | undefined, discountPercent: number = this.discountPercent): number {
    if (price == null || Number.isNaN(price)) {
      return 0;
    }
    const factor = 1 - (discountPercent || 0) / 100;
    return Number((price * factor).toFixed(2));
  }
}