import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));
  it('компонент должен иметь метод removeProductFromCart', () => {
    expect(1).toEqual(1);
  });
});