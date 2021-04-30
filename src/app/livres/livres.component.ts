import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Livres {
  id: string;
  titre: string;
  auteur: string;
  genre: string;
}

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  private livreListURL = 'http://localhost:3000/livres';
  livres: Livres[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.livreListURL)
      .subscribe((reponse: any) => {
        this.livres = reponse;
        console.log(this.livres);
      });
  }

}
