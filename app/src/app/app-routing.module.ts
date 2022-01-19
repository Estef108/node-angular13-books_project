import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'register', loadChildren: () => import('./features/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'login', loadChildren: () => import('./features/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'books', loadChildren: () => import('./features/books/books.module').then(m => m.BooksModule), canActivate: [AuthGuard]
  },
  {
    path: 'bookshops', loadChildren: () => import('./features/bookshops/bookshops.module').then(m => m.BookshopsModule), canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
