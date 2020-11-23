import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IBook } from '../book';
import { DataFetchService } from '../data-fetch.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public selectedId:string='';
  public books:IBook={"error":"0","title":"loading...","subtitle":"loading...","authors":"loading...","publisher":"loading...","language":"loading...","isbn10":"","isbn13":"loading...","pages":"loading...","year":"loading...","rating":"loading...","desc":"loading...","price":"loading...","image":"","url":"","pdf":{"Chapter 2":"","Chapter 5":""}};
  public errorMsg:string="";

  constructor(private router:Router, private route:ActivatedRoute, private _dataFetchService : DataFetchService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = String(params.get('id') || '');
      // console.log("it's null i think in book detail component "+id+params.get('id'));
      this.selectedId = id;

      this._dataFetchService.getBook(parseInt(this.selectedId))
      .subscribe(data=> this.books=data,
                 error=> this.errorMsg=error);
      // console.log(this.books.title+" hey111111111bookdetailcomponent  "+this.errorMsg);
    });
  }
}
