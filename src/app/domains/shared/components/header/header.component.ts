import { Component, Input, SimpleChanges, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/Product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  hideSideMenu = signal<boolean>(true);
  total = signal(0);
  @Input({ required: true }) cart: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calcTotal());
    }
  }
  calcTotal() {
  return this.cart.reduce((acc, product) => acc + product.price, 0);
 }

  toogleMenu() {
    this.hideSideMenu.update((state) => !state);
  }
}
