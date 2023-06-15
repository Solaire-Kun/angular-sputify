import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../service/fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {


  constructor(public service: FetchService, private router: Router) {

  }

  ngOnInit(): void {

  }

  viewAuthor(id: string) {
    this.router.navigate([`author/${id}`])
  }

}
