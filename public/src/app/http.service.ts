import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  add(body) {
    console.log(`Http Service: ${body} added to database`)
    return this._http.post(`/players`, body)
  }

  show() {
    return this._http.get(`/players`)
  }

}
