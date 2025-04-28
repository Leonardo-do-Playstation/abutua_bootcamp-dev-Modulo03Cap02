import { Component } from '@angular/core';
import { book } from '../../Book';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent { 
  
  book : book = {} as book;
  isUpdate : boolean = false;
  idCount : number = 4;
  books : book[] = [
    {
    id: 1,
    title: "Angular",
    author: "Leonardo Boff",
    price: 45.00
   },
   {
    id: 2,
    title: "Segredos comunistas",
    author: "Jonas Teobaldo",
    price: 5.00
   },
   {
    id: 3,
    title: "Velha Política",
    author: "Alan Nobrega",
    price: 20.00
   },
   ]

   saveBook(){

    if(!this.isUpdate){
    this.book.id = this.idCount;
    this.idCount++;
    this.books.push(this.book);
    }
    this.book = {} as book;
    this.isUpdate = false;
   }
   
   update(selectedbook:book){ 
   this.book = selectedbook;
   this.isUpdate = true;
  }
  remove(removebook:book){
   this.books = this.books.filter( b => b !== removebook);
  }
  

  }
