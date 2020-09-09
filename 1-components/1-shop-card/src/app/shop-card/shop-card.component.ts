import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from 'shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Output()
  public increment = new EventEmitter();

  @Output()
  public decrement = new EventEmitter();

  @Input()
  public product = {} as  ICartProduct;

  public incrementProductInCart(): void{
    this.increment.emit(this.product);
  }

  public decrementProductInCart(): void{
    this.decrement.emit(this.product);
  }

}
