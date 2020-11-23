import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentDetailComponent } from './main-content-detail/main-content-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path : '' , redirectTo : '/books/html', pathMatch : 'full' },
  { path : 'books' , redirectTo : '/books/html', pathMatch : 'full'},
  { path : 'books/:id' , component : MainContentDetailComponent },
  { path : 'books/details/:id' , component : BookDetailComponent },
  { path : '**' , redirectTo : '/books/html', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
