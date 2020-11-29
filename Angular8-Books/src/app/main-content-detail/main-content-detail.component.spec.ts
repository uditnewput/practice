import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentDetailComponent } from './main-content-detail.component';

describe('MainContentDetailComponent', () => {
  let component: MainContentDetailComponent;
  let fixture: ComponentFixture<MainContentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
