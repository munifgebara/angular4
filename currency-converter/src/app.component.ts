import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    Convert: <input type="number" [(ngModel)]="baseAmount"> USD
    <p>
      <strong>{{baseAmount}}</strong> USD =
      <strong>{{targetAmount}}</strong> GBP
    </p>
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
  `]
})
export class AppComponent {

  exchangeRate = 0.70;
  baseAmount = 1;

  get targetAmount() {
    return this.baseAmount * this.exchangeRate;
  }
}
