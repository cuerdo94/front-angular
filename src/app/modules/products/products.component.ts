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

    this.service.save(newProduct).subscribe({
      next: (productServer) => {
        if (productServer && productServer.id) {
          if (!newProduct.id) {
            newProduct.id = productServer.id;
            this.products.push(newProduct);
          } else {
            this.products = this.products.map(p => p.id === newProduct.id ? newProduct : p);
          }
        } else {
          console.error('El servidor respondió, pero la respuesta no es válida.', productServer);
        }
      },
      error: (err) => {
        console.error('Error al guardar el producto en el servidor:', err);
      },
      complete: () => {
        console.log('La operación de guardado ha finalizado.');
      }
    });

  }


  onEdit(product: Product): void {
    this.productSelect = { ...product };
  }

  onDelete(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id != id);
      },
      error: (err) => {
        console.error('Error al guardar el producto en el servidor:', err);
      },
      complete: () => {
        console.log('La operación de guardado ha finalizado.');
      }
    })
  }
}
