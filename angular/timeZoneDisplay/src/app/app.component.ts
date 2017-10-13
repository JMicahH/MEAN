import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  time: string = '';
  months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
  clicked: string = '';
  pst() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours() - 2;
    var min: any = date.getMinutes();
    var sec: any = date.getSeconds();
    var period = '';
    if (hour > 12) {
      period = 'PM';
      hour = hour - 12;
    } else {
      period = 'AM';
    }
    if (min < 10) {
      min = '0' + min;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    this.time = this.months[month] + ' ' + day + ', ' + hour + ':' + min + ':' + sec + ' ' + period;
    this.clicked = 'pst';
  }
  mst() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours() - 1;
    var min: any = date.getMinutes();
    var sec: any = date.getSeconds();
    var period = '';
    if (hour > 12) {
      period = 'PM';
      hour = hour - 12;
    } else {
      period = 'AM';
    }
    if (min < 10) {
      min = '0' + min;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    this.time = this.months[month] + ' ' + day + ', ' + hour + ':' + min + ':' + sec + ' ' + period;
    this.clicked = 'mst';
  }
  cst() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var hour: number = date.getHours();
    var min: any = date.getMinutes();
    var sec: any = date.getSeconds();
    var period = '';
    if (hour > 12) {
      period = 'PM';
      hour = hour - 12;
    } else {
      period = 'AM';
    }
    if (min < 10) {
      min = '0' + min;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    this.time = this.months[month] + ' ' + day + ', ' + hour + ':' + min + ':' + sec + ' ' + period;
    this.clicked = 'cst';
  }
  est() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours() + 1;
    var min: any = date.getMinutes();
    var sec: any = date.getSeconds();
    var period = '';
    if (hour > 12) {
      period = 'PM';
      hour = hour - 12;
    } else {
      period = 'AM';
    }
    if (min < 10) {
      min = '0' + min;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    this.time = this.months[month] + ' ' + day + ', ' + hour + ':' + min + ':' + sec + ' ' + period;
    this.clicked = 'est';
  }
  clear() {
    this.time = '';
    this.clicked = 'clear';
  }
}