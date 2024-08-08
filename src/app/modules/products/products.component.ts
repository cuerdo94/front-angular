import { Component, Input } from '@angular/core';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from './models/product';
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private service: ProductsService) { }

  products: Product[] = [];
  productSelect: Product = new Product;

  ngOnInit(): void {
    this.service.findAll().subscribe(products => {
      this.products = products;
    });
  }

  persistProduct(newProduct: Product) {
    if (newProduct.id == undefined) {
      newProduct.id = new Date().getTime();
      this.products.push(newProduct);
    } else {
      this.products.map(p => {
        if (p.id == newProduct.id) {
          return { ...newProduct };
        }

        return p;
      });
    }

  }
  onEdit(product: Product): void {
    this.productSelect = product;
  }

  onDelete(id: number): void {
    this.products = this.products.filter(p => p.id != id);
  }
}
