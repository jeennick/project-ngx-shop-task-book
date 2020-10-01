import { IFeedback } from './../../../../../../shared/interfaces/product.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
})
export class FeedbacksComponent {

  @Input()
  public feedbacks: IFeedback[] = [];

  @Output()
  public addFeedbackEvent = new EventEmitter<string>();



  public addNewFeedback(): void{
    this.addFeedbackEvent.emit('отзыв добавлен');
  }

}
