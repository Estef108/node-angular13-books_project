
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from "@angular/router"
import { BooksdbService } from './../../../../core/services/booksdb.service';
import { Router } from '@angular/router';
import { IbookList } from 'src/app/features/books/models/ibook-list';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public book?: IbookList;
  public bookId?: any;

  constructor(private booksdbService: BooksdbService, public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit( ): void {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bookId = this.activatedRoute.snapshot.paramMap.get('id');

      this.booksdbService.getBook(this.bookId)
      .subscribe((data: any) => {
        const results: IbookList = data.data.books;

        // console.log(results);
        this.book = results;
      })
    ;    
  }

}