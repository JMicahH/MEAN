import { Component } from '@angular/core';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { Quote } from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allQuotes = [];

  ngOnInit() {
    console.log("ALL QUOTES::?:?:", this.allQuotes)
  }

  newQuote(eventData){
    console.log("_+_+_+_+_+_+_+_ eventData: ", eventData);
    console.log("_+_+_+_+_+_+_+_ allQuotes BEFORE: ", this.allQuotes);
    
    this.allQuotes.push(eventData);

    console.log("_+_+_+_+_+_+_+_ allQuotes AFTER: ", this.allQuotes);
    
  }

  updateList(eventData){
    console.log("EVENTDATA:::: ", eventData);
  }

constructor() {}

}
