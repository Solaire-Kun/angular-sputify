import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from '../../service/fetch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private service: FetchService) {

  }

  ngOnInit(): void {

  }

  logout() {
    this.router.navigate(['']);
    sessionStorage.removeItem('token');
    this.service.clearItems();
  }
}
