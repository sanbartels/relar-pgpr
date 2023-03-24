import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  private url = 'https://relar-pgpr-default-rtdb.firebaseio.com';

  trabajosLoadded = false;
  trabajos: any[] = [];
  trabajosObj = new Object();

  constructor(
    private http: HttpClient
  ) {
    this.getTrabajos().subscribe(
      (resp) =>{
        this.fromJSONtoArray(resp).forEach( (value) => this.fromJSONtoArrayKey(value).forEach( (value) => this.trabajos.push(value)) );
        this.fromJSONtoArray(resp).forEach( (value) => Object.keys(value).forEach( (key) => this.trabajosObj[key] = value[key] ));
        this.trabajosLoadded = true;
      },
      (error) => console.log(error)
    )
  }

  getTrabajo = ( tid:string ) =>
    this.trabajosObj[tid];
  getTrabajos = () =>
    this.http.get(`${ this.url }/trabajos.json`);
  getPostertalk = ( sesion:number ) =>{
    return this.trabajos.filter((value) => value.tema==sesion&&value.mp4&&!value.dialogoSeleccionado )
  }
  getPosterhall = () =>{
    return this.trabajos.filter((value) => value.pdf&&value.aprobado )
  }
  getComentarios = ( tid:string ) =>{
    return this.http.get(`${ this.url }/${ tid }.json`)
      .pipe(
        map( ( resp:any ) => this.fromJSONtoArrayKey(resp))
      )
  }

  temas = [
    'Todas las sesiones',
    'Evolución y diversidad de MPCV',
    'Promoción indirecta del crecimiento vegetal',
    'Promoción directa del crecimiento vegetal',
    'El microbioma agrícola',
    'El holobionte planta',
    'Conservación y manejo microbiano en sistemas naturales y agroecosistemas',
    'Del laboratorio al campo',
    'Legislación sobre registro y empleo de productos microbiano'
  ]

  //////////
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
