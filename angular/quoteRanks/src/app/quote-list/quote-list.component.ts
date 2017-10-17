import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { Pipe, PipeTransform } from '@angular/core'

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})




export class QuoteListComponent implements OnInit {
  @Input() allQuotes: Quote[];

  @Output() listEmitter = new EventEmitter();  
  
  constructor() { }

  ngOnInit() {
  //   this.allQuotes.sort(( a:any, b:any )=> {
  //     if (a.quote.rating < b.quote.rating ){
  //     //a is the Object and args is the orderBy condition (data.likes.count in this case)
  //         return -1;
  //     }else if( a.quote.rating > b.quote.rating ){
  //         return 1;
  //     }else{
  //         return 0;
  //     }
  // });
  }

  upVote(element){
    element.rating += 1;
    // this.listEmitter.emit(element);
  }
  downVote(element){
    element.rating -=1;
  }

  deleteQuote(idx){
    this.allQuotes.splice(idx, 1);
    console.log("Quotes List Spliced at Index", idx)
  }

}
