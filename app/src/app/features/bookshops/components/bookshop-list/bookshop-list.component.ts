import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BooksdbService } from 'src/app/core/services/booksdb.service';
import { IbookshopList } from '../../models/ibookshop-list';

@Component({
  selector: 'app-bookshop-list',
  templateUrl: './bookshop-list.component.html',
  styleUrls: ['./bookshop-list.component.scss']
})
export class BookshopListComponent implements OnInit, OnDestroy {

  public bookshopList: IbookshopList[] = [];
  public addNewForm!: FormGroup;

  /*protected readonly*/ clearSubscriptions$ = new Subject();
  
  constructor(private booksdbService: BooksdbService, public fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.recoverList();
    this.buildForm();
  }

  public ngOnDestroy() {
    this.clearSubscriptions$.complete();
  }

  public recoverList() {
    this.booksdbService.getData('bookshops').pipe(takeUntil(this.clearSubscriptions$),)
    .subscribe( (data: any) => {
      const results: IbookshopList[] = data.data.bookshops;
      const formattedResults = results.map( ({_id, name, address, location}) => ({
        _id, name, address, location
      }));
      this.bookshopList = formattedResults;
    })
  }

  public buildForm() {
    this.addNewForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      location: ['', [Validators.required]]
    })
  }

  public saveNew(){
    this.booksdbService.addBookshop(this.addNewForm.value).subscribe((data:any)=> alert(data.message))
    this.addNewForm.reset();
    this.recoverList();
  }

}
