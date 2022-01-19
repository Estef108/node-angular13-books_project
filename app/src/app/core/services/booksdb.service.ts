import { IbookshopList } from './../../features/bookshops/models/ibookshop-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IbookList } from 'src/app/features/books/models/ibook-list';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksdbService {

  public baseUrl: string = "http://localhost:3000/"
  public baseUrlBooks: string = "http://localhost:3000/books/"
  public baseUrlBookshops: string = "http://localhost:3000/bookshops/"
  public headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor( private http: HttpClient) { }

  public getData(endPoint: string){
    return this.http.get(this.baseUrl + endPoint, { headers: this.headers })
  }

  public getBook(id: string): Observable<IbookList> {
    return this.http.get<IbookList>(this.baseUrlBooks + id)
  }

  public getBookshop(id: string): Observable<IbookshopList> {
    return this.http.get<IbookshopList>(this.baseUrlBookshops + id)
  }

  public addBookshop(bookshop: IbookshopList) {
    return this.http.post<IbookshopList>(`${this.baseUrl}bookshops/newBookshop`, bookshop)
  }
  
  public deleteBookshop(id: string): Observable<IbookshopList> {
    return this.http.delete<IbookshopList>(this.baseUrlBookshops + id)
  }

  public addBook(book: IbookList) {
    return this.http.post<IbookList>(`${this.baseUrl}books/newBook`, book)
  }


}
