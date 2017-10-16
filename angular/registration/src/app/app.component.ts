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

  onSubmit() {
    console.log("FORM SUBMITTING", this.user, this.users)
    this.users.push(this.user);
    this.user = new User();
  }




}
