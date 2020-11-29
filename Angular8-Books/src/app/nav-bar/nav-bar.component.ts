import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  registrationForm:FormGroup=this.fb.group({});
  public isbn:number=0;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      isbn:['']
    });
    this.isbn = this.registrationForm.value.isbn;
  }
  onSelectIsbn(value:number){
    console.log(value);
    this.router.navigate(['/books/details',value]);
  }

}
