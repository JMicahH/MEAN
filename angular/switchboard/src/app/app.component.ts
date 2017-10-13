import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches = [];

  ngOnInit(){
    for(let i=0; i<10; i++){
      this.switches[i] = {
        status: "off",
      }
    }
  }

  click(element, index){
    console.log(element, index);
    if(this.switches[index].status == "off"){
      this.switches[index].status = "on";
    }
    else{
      this.switches[index].status = "off"
    }
}
}
