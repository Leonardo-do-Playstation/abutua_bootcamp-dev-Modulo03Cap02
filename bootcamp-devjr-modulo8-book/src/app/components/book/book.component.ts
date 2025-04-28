import { Component, EventEmitter, Input, Output } from '@angular/core';
import { book } from '../../Book'

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
   
@Input()
  book: book = {} as book;

@Output()
saveEventEmitter = new EventEmitter();

save(){
  this.saveEventEmitter.emit();
 }
}