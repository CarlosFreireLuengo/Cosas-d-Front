import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Product } from './product/product';

bootstrapApplication(Product, appConfig)
  .catch((err) => console.error(err));
