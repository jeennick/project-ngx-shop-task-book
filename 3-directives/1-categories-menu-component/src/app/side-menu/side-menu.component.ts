import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  @Input()
  public categories: ICategory[] = [];

  @Output()
  public categoryChange = new EventEmitter();

  public currentName: string = null;

  public hover(name: string): void{
    this.currentName = name;
  }

  public mouseLeave(): void{
    this.currentName = null;
  }

  public redirectTo(newSubCategory: ICategory): void{
    this.categoryChange.emit(newSubCategory.name);
  }
}
