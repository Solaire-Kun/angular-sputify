import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  clientId: string = '';
  clientSecret: string = '';

  constructor(private http: HttpClient) {

  }

  login(): Observable<any> {
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: new HttpParams().set('grant_type', 'client_credentials')
    };
    return this.http.post(authOptions.url, authOptions.body.toString(), { headers: authOptions.headers });
  }
}
