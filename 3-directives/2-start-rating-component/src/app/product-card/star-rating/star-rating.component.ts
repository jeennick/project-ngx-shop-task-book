import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-star-rating',
  templateUrl: './star-rating.component.html',
})
export class StarRatingComponent {
  @Input()
  public feedbackRate = 0;

  public maxRate = 5;

  public stars: number[] = [0, 1, 2, 3, 4];

  public highlight(index: number): boolean{
    return index < this.feedbackRate;
  }
}
