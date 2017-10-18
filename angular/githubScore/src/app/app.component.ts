import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
username = "";
userData = [];
userScore = 0;

constructor(private _githubService: GithubService) {}


onSubmit(){
  console.log("USERNAME SUBMITTED", this.username)
  this._githubService.getUser(this.username)
  .then((data) => {
    this.userData = data
    this.userScore += data.public_repos + data.followers + data.following;
  })
  .catch(err => console.log("ERRORRRRRS!!!", err))
}


}
