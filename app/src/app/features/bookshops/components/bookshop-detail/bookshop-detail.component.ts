import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksdbService } from 'src/app/core/services/booksdb.service';
import { IbookshopList } from 'src/app/features/bookshops/models/ibookshop-list';


@Component({
  selector: 'app-bookshop-detail',
  templateUrl: './bookshop-detail.component.html',
  styleUrls: ['./bookshop-detail.component.scss']
})
export class BookshopDetailComponent implements OnInit {
  public bookshop?: IbookshopList;
  public bookshopId?: any;

  constructor(private booksdbService: BooksdbService, public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit( ): void {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bookshopId = this.activatedRoute.snapshot.paramMap.get('id');

      this.booksdbService.getBookshop(this.bookshopId)
      .subscribe((data: any) => {
        const results: IbookshopList = data.data.bookshop;
        // console.log(results);
        this.bookshop = results;
      });
  }

  

  public deleteOne(){
    this.bookshopId = this.activatedRoute.snapshot.paramMap.get('id');
    this.booksdbService.deleteBookshop(this.bookshopId).subscribe((data:any) =>{
      return alert(data.message);;
    });
    this.router.navigate(['bookshops']);
  }

}
