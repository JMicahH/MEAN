import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = [];
  ngOnInit() {
    for(let i = 0; i < 10; i ++){
      this.colors[i] = "rgb(" + (Math.floor(Math.random()*255)+1) + "," + (Math.floor(Math.random()*255)+1) + "," + (Math.floor(Math.random()*255)+1) + ")"
      
    }
  }
}
