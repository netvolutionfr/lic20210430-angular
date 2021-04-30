import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

export interface Livre {
  id: string;
  titre: string;
  auteur: string;
  genre: string;
}

@Component({
  selector: 'app-livredetail',
  templateUrl: './livredetail.component.html',
  styleUrls: ['./livredetail.component.css']
})
export class LivredetailComponent implements OnInit {
  private livreListURL = 'http://localhost:3000/livre';
  id: string;
  livre: Livre;

  // TODO : Ca marche pas encore...

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('key');
      this.httpClient.get(this.livreListURL + '/' + this.id )
        .subscribe((reponse: any) => {
          this.livre = reponse;
          console.log(this.livre);
        });
    });
  }

  ngOnInit(): void {
  }
}
