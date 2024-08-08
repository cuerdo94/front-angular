import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      name: "Bugatti Silverado",
      description: "Ferrari",
      price: 123
    },
    {
      id: 2,
      name: "Bugatti Element",
      description: "Volt",
      price: 123
    },
    {
      id: 3,
      name: "Mini Mercielago",
      description: "red",
      price: 123
    },
  ];

  constructor() { }

  findAll(): Observable<Product[]> {
    return of(this.products);
  }
}
