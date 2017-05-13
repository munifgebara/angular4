import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fixed'})
export class FixedPipe implements PipeTransform {

  transform(value: number, digits=2) {
    return value.toFixed(digits);
  }
}
