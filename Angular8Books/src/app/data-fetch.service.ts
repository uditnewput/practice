import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IData } from './data';
import { catchError } from 'rxjs/operators';
import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  private _url:string = "";

  constructor(private http:HttpClient) { }

  getData(id:string):Observable<IData>{
    this._url="https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/search/";
    this._url = this._url + id;
    // console.log(id+"id is working in service "+this._url);
    return this.http.get<IData>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || 'Server Error');
  }

  getBook(id:number):Observable<IBook>{
    this._url="https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/books/";
    this._url = this._url + id;
    // console.log(id+"id is working in service isbn "+this._url);
    return this.http.get<IBook>(this._url).pipe(catchError(this.errorHandlerBook));
  }
  errorHandlerBook(error:HttpErrorResponse){
    return throwError(error.message || 'Server Error');
  }
}
