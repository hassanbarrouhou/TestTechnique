import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { HttpClient } from '@angular/common/http';
import { MovieSearchAppModel, SearchModel } from '../models/movie-search-app.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchAppService {
  private readonly baseUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=6b5c5944&';
  private jc: JsonConvert;
  video: SearchModel;

  constructor(private http: HttpClient) { 
    this.jc = new JsonConvert();
  }

  getVideo(value: string): Observable<SearchModel> {
    return this.http.get(`${this.baseUrl}s=${value}`).pipe(
      map(resp => {
        const desr = this.jc.serialize(resp, SearchModel);
        this.video = desr;
        console.log(resp);
       // const ff = this.jc.serialize(client, ClientsModel);
       return desr;
      }, error => {
        throw new Error('error');
      })
    )
  }

}
