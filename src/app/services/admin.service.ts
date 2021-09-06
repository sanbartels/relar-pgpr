import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'https://relar-pgpr-default-rtdb.firebaseio.com';

  usuariosLoadded = false;
  trabajosLoadded = false;

  usuarios: any[];
  usuariosObj: any;
  trabajos: any[] = [];
  trabajosObj = new Object();

  constructor( private http: HttpClient ) {
    this.getUsers().subscribe(
      (resp) =>{
        this.usuarios = this.fromJSONtoArrayKey(resp);
        this.usuariosObj = resp;
        this.usuariosLoadded = true;
      },
      (error) => console.log(error)
    )
    this.getTrabajos().subscribe(
      (resp) =>{
        this.fromJSONtoArray(resp).forEach( (value) => this.fromJSONtoArrayKey(value).forEach( (value) => this.trabajos.push(value)) );
        this.fromJSONtoArray(resp).forEach( (value) => Object.keys(value).forEach( (key) => this.trabajosObj[key] = value[key] ));
        this.trabajosLoadded = true;
      },
      (error) => console.log(error)
    )
  }

  sortUsersBy = (value: string) => this.usuarios.sort((a, b) =>{
    // two undefined values should be treated as equal ( 0 )
    if( typeof a[value] === 'undefined' && typeof b[value] === 'undefined' ) return 0;
    // if a is undefined and b isn't a should have a lower index in the array
    else if( typeof a[value] === 'undefined' ) return 1;
      // if b is undefined and a isn't a should have a higher index in the array
    else if( typeof b[value] === 'undefined' ) return -1;
    return a[value] > b[value]? 1 : a[value] < b[value]? -1 : 0;
  })
  sortWorksBy = (value: string) => this.trabajos.sort((a, b) => a[value] > b[value]? 1 : a[value] < b[value]? -1 : 0);
  sortWorksByTrueOrFalse = (value: string) => this.trabajos.sort((a, b) => a[value] == b[value]? 0 : a[value]? -1 : 1);

  getUsers = () => this.http.get(`${ this.url }/users.json`);
  getTrabajos = () => this.http.get(`${ this.url }/trabajos.json`);

  setConferencista = ( data: any, lang: string, key: string ) => this.http.put(`${ this.url }/data/conferencistas/${ key }/${ lang }.json`, data);
  setPanelista = ( data: any, lang: string, key: string ) => this.http.put(`${ this.url }/data/panelistas/${ key }/${ lang }.json`, data);

  aprobarTrabajo = ( uid: string, tid: string ) => this.http.put(`${ this.url }/trabajos/${uid}/${tid}/aprobado.json`, true);
  desaprobarTrabajo = ( uid: string, tid: string ) => this.http.put(`${ this.url }/trabajos/${uid}/${tid}/aprobado.json`, false);

  temas = [
    '',
    'Evolución y diversidad de MPCV',
    'Promoción indirecta del crecimiento vegetal',
    'Promoción directa del crecimiento vegetal',
    'El microbioma agrícola',
    'El holobionte planta',
    'Conservación y manejo del microbioma en sistemas naturales y agroecosistemas',
    'Del laboratorio al campo',
    'Legislación sobre registro y empleo de productos microbiano'
  ]

  ///////////
  ///
  fromJSONtoArrayKey( obj : Object ){
    const newArray = [];
    if(obj === null) return [];
    Object.keys(obj).forEach( (key)=>{
        const item = obj[key];
        item.key = key;
        newArray.push(item);
    })
    return newArray
  }

  fromJSONtoArray( obj : Object ){
    const newArray = [];
    if(obj === null) return [];
    Object.keys(obj).forEach( (key)=>{
        const item = obj[key];
        newArray.push(item);
    })
    return newArray
  }
}
