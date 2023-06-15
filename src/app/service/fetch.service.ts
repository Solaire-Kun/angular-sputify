import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  items: any[] = [];
  authorDetails: any[] = [];

  constructor(private http: HttpClient) {

  }

  getData(query: string, amount: number) {
    try {
      this.items = [];
      this.authorDetails = [];

      this.http.get(`https://api.spotify.com/v1/search?q=${query}&type=artist`).subscribe((response: any) => {
        for (let i = 0; i < amount; i++) {
          if (response.artists.items[i] != undefined) {
            this.items[i] = response.artists.items[i]
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  getAuthor(id: string) {
    try {
      this.items = [];
      this.authorDetails = [];

      // prendi autore
      this.http.get(`https://api.spotify.com/v1/artists/${id}`).subscribe((response: any) => {
        if (response != undefined) {
          this.items[0] = response;
        }
      });

      // prendi l'album dell'autore
      this.http.get(`https://api.spotify.com/v1/artists/${id}/albums`).subscribe((response: any) => {
        if (response != undefined) {
          this.authorDetails[0] = response;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
  }
}
