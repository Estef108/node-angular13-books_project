import { TestBed } from '@angular/core/testing';

import { BooksdbService } from './booksdb.service';

describe('BooksdbService', () => {
  let service: BooksdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
