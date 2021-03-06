import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  add(body) {
    return this._http.post(`api/players`, body)
  }

  show() {
    return this._http.get(`api/players`)
  }

}
