import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookshopsRoutingModule } from './bookshops-routing.module';
import { BookshopListComponent } from './components/bookshop-list/bookshop-list.component';
import { BookshopCardComponent } from './components/bookshop-list/bookshop-card/bookshop-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookshopDetailComponent } from './components/bookshop-detail/bookshop-detail.component';


@NgModule({
  declarations: [
    BookshopListComponent,
    BookshopCardComponent,
    BookshopDetailComponent,
  ],
  imports: [
    CommonModule,
    BookshopsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BookshopsModule { }
