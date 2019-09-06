import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueDataService {

  private url: string = 'http://localhost:5000/api/values';
  constructor(private http: HttpClient) { }

  public getValues(): Observable<any>{
    return this.http.get<any>(this.url, {headers: new HttpHeaders()});
  }
}
