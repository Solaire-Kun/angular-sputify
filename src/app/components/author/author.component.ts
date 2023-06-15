import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {



  constructor(public service: FetchService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getAuthor(id)
  }

  back(e: Event) {
    e.preventDefault();
    this.router.navigate(['/home']);
  }

}
