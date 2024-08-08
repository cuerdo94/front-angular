import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "./modules/products/products.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'HOLA MUNDO';
  enebled: boolean = false;
  fruits: string[] = ["Frutilla", "Manzana", "Membrillo", "Piña", "Arandano"]
  setEnebled(): void {
    this.enebled = !this.enebled;
  }
}
