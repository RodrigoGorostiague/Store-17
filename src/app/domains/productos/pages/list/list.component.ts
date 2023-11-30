import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/model/Product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cartList = signal<Product[]>([]);

  constructor() {
    const initialProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Camiseta',
        price: Math.random() * 10000,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Hoodie',
        price: Math.random() * 10000,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Mug',
        price: Math.random() * 10000,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pin',
        price: Math.random() * 10000,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Stickers1',
        price: Math.random() * 10000,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Stickers2',
        price: Math.random() * 10000,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      }
    ]

    this.products.set(initialProducts);
  }

addToCart(product: Product) {
  this.cartList.update((prevList) => [...prevList, product]);
}

}
