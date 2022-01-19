import { BookshopDetailComponent } from './components/bookshop-detail/bookshop-detail.component';
import { BookshopListComponent } from './components/bookshop-list/bookshop-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: BookshopListComponent
  },
  {
    path: ':id', component: BookshopDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookshopsRoutingModule { }
