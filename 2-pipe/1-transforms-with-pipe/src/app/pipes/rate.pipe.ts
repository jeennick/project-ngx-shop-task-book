import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    if (value === 0)
    {
      return value;
    }
    const frac = value % 1;
    const num = value - frac;
    if (frac < 0.25){
      return num ;
    }

    if (frac < 0.75){
      return num + 0.5;
    }

    return num + 1;
  }
}
