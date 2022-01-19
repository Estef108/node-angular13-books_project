import { IbookshopList } from './../../../models/ibookshop-list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshop-card',
  templateUrl: './bookshop-card.component.html',
  styleUrls: ['./bookshop-card.component.scss']
})
export class BookshopCardComponent implements OnInit {
  @Input() public bookshop!: IbookshopList;
  constructor() { }

  ngOnInit(): void {
  }

}
