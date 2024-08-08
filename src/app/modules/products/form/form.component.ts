import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() product: Product = new Product();
  @Output() newProductEvent = new EventEmitter();

  onSubmit(): void {
    console.log(this.product);
    this.newProductEvent.emit(this.product)
    this.product = new Product;
  }


}
