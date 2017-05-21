import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SignupFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
