import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExchangeService } from './exchange.service';
import { CurrencySelectComponent } from './currency-select.component';
import { FixedPipe } from './fixed.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CurrencySelectComponent, FixedPipe],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
