import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {


  // public addNewForm!: FormGroup;

  // constructor(private booksdbService: BooksdbService) { }


  // public recoverList() {
  //   this.booksdbService.getData(endo)
  //   .subscribe( (data: any) => {
  //     const results: IbookList[] = data.data.books;
  //     const formattedResults = results.map( ({_id, title, image, author, year}) => ({
  //       _id, title, image, author, year
  //     }));
  //     this.bookList = formattedResults;
  //   })
  // }

  // public saveNew(){
  //   this.booksdbService.addElement(this.addNewForm.value).subscribe(element => console.log(element))
  //   recoverList();
  // }

  


  ngOnInit(): void {
  }

}
