import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCardComponent } from './components/book-list/book-card/book-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { FilterPipe } from '../../shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    BookListComponent,
    BookCardComponent,
    BookDetailComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class BooksModule { }
