import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { IProduct } from 'shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {
  @Output()
  public addToCart = new EventEmitter();

  @Output()
  public goToProduct = new EventEmitter();

  @Input()
  public product = {} as IProduct;

  public addToBasket(): void{
    this.addToCart.emit();
  }

  public redirectTo(): void{
    this.goToProduct.emit();
  }

}
