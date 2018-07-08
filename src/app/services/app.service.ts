import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  URLBase: string = 'https://farmaciasdapp.azurewebsites.net/api';

  constructor(private _http: HttpClient, private _httpS: Http) {
  }

  getAll(nameService) {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this._http.get(`${this.URLBase}/${nameService}`, { headers } );
  }


  postQuery(nameService, body) {
    body = JSON.stringify(body);
    const headers = new Headers({
      'Content-Type' : 'application/json'
    });
    return this._httpS.post(`${this.URLBase}/${nameService}`, body, { headers } );
  }
}
