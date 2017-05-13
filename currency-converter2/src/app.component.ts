import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount"
      [class.error]="isInvalid(baseAmount)"> USD
    = <strong>{{targetAmount}}</strong> GBP
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
    .error {
      background-color: #ff6666;
    }
  `]
})
export class AppComponent {

  exchangeRate = 0.70;
  baseAmount = 1;

  get targetAmount() {
    return this.baseAmount * this.exchangeRate;
  }
  
  isInvalid(value) {
    return !Number.isFinite(value);
  }
}
