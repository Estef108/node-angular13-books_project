import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshopCardComponent } from './bookshop-card.component';

describe('BookshopCardComponent', () => {
  let component: BookshopCardComponent;
  let fixture: ComponentFixture<BookshopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookshopCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
