import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup-form',
  template: `
    <form (ngSubmit)="onSubmit(form)" novalidate #form="ngForm">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" #emailField="ngModel"
          [(ngModel)]="newUser.email" name="email" required pattern=".+@.+">
        <p *ngIf="emailField.touched && emailField.invalid"
          class="alert alert-danger">Please enter a valid email</p>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" #passwordField="ngModel"
          [(ngModel)]="newUser.password" name="password" required>
        <p *ngIf="passwordField.touched && passwordField.invalid"
          class="alert alert-danger">Please enter a password</p>
      </div>
      <button type="submit" class="btn btn-primary"
        [disabled]="form.invalid">Sign Up</button>
    </form>
  `,
  styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
  `]
})
export class SignupFormComponent {

  newUser={
     email:'',
     password:''

  }


  onSubmit(form: NgForm) {
    console.log('should register:', this.newUser);
    form.resetForm();
  }
}
