import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../service/fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public service: FetchService) {

  }

  ngOnInit(): void {

  }
}
