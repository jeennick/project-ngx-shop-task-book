import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Output()
  public goToProduct = new EventEmitter();

  @Input()
  public product = {} as IProduct;

  public redirectTo(): void{
    this.goToProduct.emit();
  }
}
