import { ActivatedRoute } from '@angular/router';
import { BooksdbService } from './../../../../core/services/booksdb.service';
import { IbookList } from './../../models/ibook-list';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public bookList: IbookList[] = [];
  public addNewForm!: FormGroup;
  public p: any = 1;
  public filterElement = '';

  constructor(
    private booksdbService: BooksdbService, 
    public fb: FormBuilder, 
    public router: Router) { }

  ngOnInit(): void {
    this.recoverList();
    this.buildForm();
  }

  public recoverList() {
    this.booksdbService.getData('books')
      .subscribe((data: any) => {
        const results: IbookList[] = data.data.books;
        const formattedResults = results.map(({ _id, title, image, author, year }) => ({
          _id, title, image, author, year
        }));
        this.bookList = formattedResults;
      })
  }

  public buildForm() {
    this.addNewForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      year: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })
  }

  public saveNew() {
    this.booksdbService.addBook(this.addNewForm.value).subscribe((data:any) => alert(data.message))
    this.recoverList();
  }

}


