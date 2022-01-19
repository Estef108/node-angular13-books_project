import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshopDetailComponent } from './bookshop-detail.component';

describe('BookshopDetailComponent', () => {
  let component: BookshopDetailComponent;
  let fixture: ComponentFixture<BookshopDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookshopDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
