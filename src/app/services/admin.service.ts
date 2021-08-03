import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'https://relar-pgpr-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient ) { }

  getUsers = () => this.http.get(`${ this.url }/users.json`);

  setConferencista = ( data: any, lang: string, key: string ) => this.http.put(`${ this.url }/data/conferencistas/${ key }/${ lang }.json`, data);
}
