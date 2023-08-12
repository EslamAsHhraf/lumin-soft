import { Component, OnInit } from '@angular/core';
import { BookService } from '../../servies/book/book.service';
import { Book } from '../../models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../servies/cart/services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['searchTerm'])
        this.books = this.bookService.getAllBooksBySearchTerm(
          params['searchTerm']
        );
      else {
         this.books = this.bookService.getAll();
      }
    });
  }
  addToCart(book:Book) {
    this.cartService.addToCart(book);
    this.router.navigateByUrl('/cart-page');
  }
}
