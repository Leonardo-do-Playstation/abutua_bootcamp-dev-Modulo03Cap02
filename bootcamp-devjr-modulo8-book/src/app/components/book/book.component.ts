import { Component } from '@angular/core';
import { book } from '../../Book'
@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book : book = {
    id : 1,
    title : "Angular",
    author : "Leonardo Boff",
    price : 50.00 
  }
}
