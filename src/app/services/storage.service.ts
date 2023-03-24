import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileItem } from '../models/file.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: AngularFireStorage,
    private auth: AuthService,
    public snackBar: MatSnackBar
  ){}

  subirCloudStorage = ( name: string, archivo: any ) =>{
    console.log(archivo);
    return this.storage.upload(name, archivo);
  }

  referenciaCloudStorage = ( name: string ) =>{
    return this.storage.ref(`comprobanteAlar/${name}`);
  }

  getDownloadURL = ( name: string ) =>{
    return this.storage.ref(name).getDownloadURL();
  }

////////////////////////////////////////////////////////////////
  subirArchivo( item: FileItem ){
    const storageRef = this.storage.storage.ref();
    
    item.subiendo=true;

    const path = `trabajos/${item.tid}/${item.tidname}`;
    const ref = this.storage.ref(path);

    const task: AngularFireUploadTask = this.storage.upload(path, item.archivo);
    task.percentageChanges().subscribe(
      resp => {item.progreso = resp; },
      error => console.error(error),
      () =>{
        (async() => {
          item.url = await ref.getDownloadURL().toPromise();
          this.actualizarTrabajo( item )
        })();
      });
  }

  actualizarTrabajo( item: FileItem ){

    let type: string;
    item.archivo.type.match(/pdf/)? type='pdf' :
    item.archivo.type.match(/mp4/)? type='mp4' : type='jpg';

    this.auth.getTrabajo( item.uid, item.tid ).subscribe(
      (resp) =>{
        let newTrabajo = resp;
        newTrabajo[type] = item.url;
        this.auth.actualizarTrabajo( item.uid, item.tid, newTrabajo ).subscribe(
          (resp) => this.snackBar.open('Archivo guardado', 'Aceptar', { duration: 3000 }),
          (error) =>  this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 })
        )
      },(error) =>  this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 })
    )
  }

  getUrlJpg = ( tid: string ) => this.storage.ref('trabajos/'+tid+'/'+tid+'.jpg').getDownloadURL();
  getUrlPdf = ( tid: string ) => this.storage.ref('trabajos/'+tid+'/'+tid+'.pdf').getDownloadURL();
  getUrlMp4 = ( tid: string ) => this.storage.ref('trabajos/'+tid+'/'+tid+'.mp4').getDownloadURL();
}