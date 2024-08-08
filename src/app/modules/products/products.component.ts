import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from './models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private service: ProductsService) { }
  products: Product[] = [];
  ngOnInit(): void {
    this.service.findAll().subscribe(products => {
      this.products = products;
    });
  }

}
