import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient, private _httpS: Http) {
    console.log('service ready');
  }

  getQuery() {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this._http.get('http://localhost:49309/api/Stores', { headers } );
  }


  postQuery() {
    const body = {
      'Type': 'string',
      'Name': 'string',
      'Number': 0,
      'RFC': 'string',
      'Regimen': 'string',
      'StreetAddress': 'string',
      'City': 'string',
      'State': 'string',
      'PostalCode': 'string',
      'Country': 'string',
      'Manager': 'string',
      'Phone': 'string',
      'Email': 'string'
    };
    const headers = new Headers({
      'Content-Type' : 'application/json'
    });
    return this._httpS.post('http://localhost:49309/api/Stores', body, { headers } );
  }
}
