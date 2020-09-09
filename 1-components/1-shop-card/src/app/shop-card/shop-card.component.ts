import { Component, EventEmitter, Input } from '@angular/core';
import { ICartProduct } from 'shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {

  public increment = new EventEmitter();
  public decrement = new EventEmitter();

  @Input()
  public product: ICartProduct;

  public incrementProductInCart(): void{
    this.increment.emit(this.product);
  }

  public decrementProductInCart(): void{
    this.increment.emit(this.product);
  }

}
