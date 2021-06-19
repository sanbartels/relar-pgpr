import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: AngularFireStorage,
  ){}

  subirCloudStorage = ( name: string, archivo: any ) =>{
    console.log(archivo);
    return this.storage.upload(name, archivo);
  }

  referenciaCloudStorage = ( name: string ) =>{
    return this.storage.ref(`comprobanteAlar/${name}`);
  }
}
