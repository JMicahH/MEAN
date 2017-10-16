import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  user = new User();
  successMessage = "";

  onSubmit() {
    console.log("FORM SUBMITTING", this.user, this.users);
    this.successMessage = "Thank you for registering with us " + this.user.firstName + ". We just sent you a confirmation email to " + this.user.email + ", and will send all mail to " + this.user.streetAddress + ", " + this.user.city + " " + this.user.state + ".";
    this.users.push(this.user);
    this.user = new User();
  }
  



}
