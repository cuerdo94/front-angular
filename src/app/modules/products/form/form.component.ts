import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() product: Product = new Product();
  @Output() newProductEvent = new EventEmitter();

  onSubmit(productForm: NgForm): void {
    console.log(this.product);

    if (productForm.valid) {
      this.newProductEvent.emit({ ...this.product })
      productForm.reset();
    }
    // this.product = new Product;
  }


}
