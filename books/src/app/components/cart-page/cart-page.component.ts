import { Component, OnInit } from '@angular/core';
import { CartService } from '../../servies/cart/services';
import { Cart } from '../../models/Cart';
import { CartItem } from '../../models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  ngOnInit(): void {}

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.book.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.book.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
}
