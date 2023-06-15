import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../service/fetch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  constructor(private service: FetchService) {

  }

  ngOnInit(): void {

  }

  inputQuery: string = "";
  amountQuery: number = 20;

  search(e: Event) {
    e.preventDefault();
    if (this.inputQuery != "" && this.amountQuery != 0) {
      this.service.getData(this.inputQuery, this.amountQuery);
    } else {
      alert('You cannot search with an empty text field or with 0 amount.')
    }
  }
}
