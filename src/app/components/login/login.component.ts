import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) {

  }

  ngOnInit(): void {

  }

  clientId: string = "";
  clientSecret: string = "";

  login(): void {
    if (this.clientId == "" || this.clientSecret == "") {
      alert("Please insert Client ID and your Client Secret.");
    } else {
      this.service.clientId = this.clientId;
      this.service.clientSecret = this.clientSecret;
      this.service.login().subscribe(
        (response: any) => {
          if (response.access_token) {
            sessionStorage.setItem('token', response.access_token);
            this.router.navigate(['/home']);
          }
        },
        (error: any) => {
          alert('Your credentials are not valid.');
        }
      )
    }
  }
}
