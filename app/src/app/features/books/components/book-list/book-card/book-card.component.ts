import { Component, Input, OnInit } from '@angular/core';
import { IbookList } from '../../../models/ibook-list';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() public book!: IbookList;
  constructor() { }

  ngOnInit(): void {
  }

}
