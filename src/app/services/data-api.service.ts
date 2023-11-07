// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { user } from '../store/data.state';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  fetchCount = 0;
  getData(): Observable<user[]> {
    console.log(this.fetchCount++)
    return this.http.get<user[]>(this.apiUrl);
  }

  // getData(): Observable<user[]> {
  //   let result = new Subject<user[]>();
  //   fetch(this.apiUrl)
  //     .then((response) => response.json())
  //     .then((json) => result.next(json));
  //   return result.asObservable();
  // }

}
