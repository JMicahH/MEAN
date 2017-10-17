import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Input() allQuotes: Quote[];
  quote = new Quote();

  @Output() quoteEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.quoteEmitter.emit(this.quote);
    this.quote = new Quote();

  }

}
