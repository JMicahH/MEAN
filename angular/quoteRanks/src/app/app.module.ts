import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppComponent } from './app.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
