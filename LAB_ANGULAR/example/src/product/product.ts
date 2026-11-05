import { Component } from '@angular/core';
import { Model } from '../app/data/repository.model';
import {CommonModule} from '@angular/common'
@Component({
  imports: [CommonModule],
  selector: 'app-product',
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class Product {
  model: Model = new Model();
}
