import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataFetchService } from '../data-fetch.service';

@Component({
  selector: 'app-main-content-detail',
  templateUrl: './main-content-detail.component.html',
  styleUrls: ['./main-content-detail.component.scss']
})
export class MainContentDetailComponent implements OnInit {
  public loading:boolean=true;
  public selectedId:string='';
  public books={"error":"0","total":"429","page":"1","books":[{"title":"Head First HTML with CSS & XHTML","subtitle":"A Learner's Companion to HTML, CSS, and XHTML","isbn13":"9780596101978","price":"$4.21","image":"https://itbook.store/img/books/9780596101978.png","url":"https://itbook.store/books/9780596101978"},{"title":"Sams Teach Yourself HTML and CSS in 24 Hours, 8th Edition","subtitle":"Includes New HTML 5 Coverage","isbn13":"9780672330971","price":"$4.99","image":"https://itbook.store/img/books/9780672330971.png","url":"https://itbook.store/books/9780672330971"},{"title":"Jump Start HTML5","subtitle":"Get up to speed with HTML5 in a weekend","isbn13":"9780980285826","price":"$19.00","image":"https://itbook.store/img/books/9780980285826.png","url":"https://itbook.store/books/9780980285826"},{"title":"HTML5 Games, 2nd Edition","subtitle":"Creating Fun with HTML5, CSS3 and WebGL","isbn13":"9781118855386","price":"$19.83","image":"https://itbook.store/img/books/9781118855386.png","url":"https://itbook.store/books/9781118855386"},{"title":"HTML5 Games Most Wanted","subtitle":"Build the Best HTML5 Games","isbn13":"9781430239789","price":"$27.84","image":"https://itbook.store/img/books/9781430239789.png","url":"https://itbook.store/books/9781430239789"},{"title":"Creating HTML5 Animations with Flash and Wallaby","subtitle":"Converting Flash Animations to HTML5","isbn13":"9781449307134","price":"$11.48","image":"https://itbook.store/img/books/9781449307134.png","url":"https://itbook.store/books/9781449307134"},{"title":"HTML5 Cookbook","subtitle":"Solutions & Examples for HTML5 Developers","isbn13":"9781449396794","price":"$22.54","image":"https://itbook.store/img/books/9781449396794.png","url":"https://itbook.store/books/9781449396794"},{"title":"HTML5 and JavaScript Projects, 2nd edition","subtitle":"Build on your Basic Knowledge of HTML5 and JavaScript to Create Substantial HTML5 Applications","isbn13":"9781484238639","price":"$28.32","image":"https://itbook.store/img/books/9781484238639.png","url":"https://itbook.store/books/9781484238639"},{"title":"The Essential Guide to HTML5","subtitle":"Using Games to Learn HTML5 and JavaScript","isbn13":"9781484241547","price":"$34.21","image":"https://itbook.store/img/books/9781484241547.png","url":"https://itbook.store/books/9781484241547"},{"title":"HTML5 Game Development by Example, 2nd Edition","subtitle":"Make the most of HTML5 techniques to create exciting games from scratch","isbn13":"9781785287770","price":"$42.76","image":"https://itbook.store/img/books/9781785287770.png","url":"https://itbook.store/books/9781785287770"}]};
  public errorMsg:string="";

  constructor(private router:Router, private route:ActivatedRoute, private _dataFetchService : DataFetchService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.loading=true;
      let id = String(params.get('id') || '');
      this.selectedId = id;

      this._dataFetchService.getData(this.selectedId)
      .subscribe(data=> {this.books=data;
                        this.loading=false
      },
                 error=> this.errorMsg=error);
      // console.log(this.books.total+" hey11  "+this.errorMsg);
    });
  }

  onSelectCard(isbn:string){
    this.router.navigate(['books/details/',parseInt(isbn)]);
  }
}

