import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment';

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

  constructor(private http: HttpClient) { }
  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.product()).pipe(map((resp: any) => resp._embedded.products as Product[]));
    // return of(this.products);
  }

  save(product: Product): Observable<Product> {
    return product.id == undefined ? this.create(product) : this.update(product);
  }

  private create(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.product(), product).pipe(map((resp: any) => resp as Product));
  }

  private update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.product()}/${product.id}`, product).pipe(map((resp: any) => resp as Product));
  }

  delete(id: Number): Observable<void> {
    return this.http.delete<void>(`${environment.product()}/${id}`);
  }
}
