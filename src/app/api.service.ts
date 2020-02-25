import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostResponse} from "./post-response/post-response.module";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient  ) { }
  getPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>('https://hn.algolia.com/api/v1/search_by_date?tags=story')
      .pipe(
        map(res => new PostResponse().deserialize(res))
      );
  }
}
