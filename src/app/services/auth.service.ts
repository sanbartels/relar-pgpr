import { Injectable, Pipe } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { UserDB, Trabajo } from '../models/user.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logged = false;
  public popup = true;
  public user = new UserDB();
  private trabajo = new Trabajo();

  private url = 'https://relar-pgpr-default-rtdb.firebaseio.com';

  constructor( 
    private auth: AngularFireAuth,
    private http: HttpClient
  ){
    this.auth.authState.subscribe( 
      (user) =>{ if(user) this.login(user); this.logged = true; }, 
      (error) => console.log(error) );
  }

  login = (user) => {
    this.getUser(user.uid).subscribe( ( resp: any ) =>{
      if( resp ) { this.user = resp }
      else{ 
        this.user.uid = user.uid;
        if( user.displayName ) this.user.displayName = user.displayName;
        if( user.email ) this.user.email = user.email;
        if( user.emailVerified ) this.user.emailVerified = user.emailVerified;
        if( user.photoURL ) this.user.photoURL = user.photoURL;
      }
    }, (err) => {} )
  }

  /* GUARDAR USUARIO */
  saveDatosPersonales = ( data: any ) =>{
    /* SAVE DATA */
    this.user.name = data.name;
    this.user.lastname = data.lastname;
    this.user.email = data.mail;
    this.user.telefono = data.telefono;
    this.user.sexo = data.sexo;
    this.user.formacion = data.formacion;
    this.user.categoria = data.categoria;
    this.user.pais = data.pais;
    this.user.ciudad = data.ciudad;
    this.user.dni = data.dni;
    this.user.fechaDeNacimiento = data.fechaDeNacimiento;
    this.user.inscripcion = 4;
    if(data.institucion) this.user.institucion = data.institucion;
    if(data.seccion) this.user.seccion = data.seccion;
    /* NUEVO USUARIO */
    return this.newUser(this.user);
  }

  /* GUARDAR TRABAJO */
  saveTrabajo = ( data: any ) =>{
    /* SAVE DATA */
    this.trabajo.uid = this.user.uid;
    this.trabajo.date = new Date();
    this.trabajo.autores = data.autores;
    this.trabajo.institucion = data.institucion;
    this.trabajo.expone = data.expone;
    this.trabajo.resumen = data.resumen;
    this.trabajo.tema = data.tema;
    this.trabajo.titulo = data.titulo;
    if(data.tipoBeca) this.trabajo.tipoBeca = data.tipoBeca;
    if(data.file!=null) this.trabajo.file = this.user.uid + '.pdf';

    data.beca == '1'? this.trabajo.beca = true : this.trabajo.beca = false;
    data.postertalk == '1'? this.trabajo.postertalk = true : this.trabajo.postertalk = false;
    data.dialogos == '1'? this.trabajo.dialogos = true : this.trabajo.dialogos = false;
    data.certificacion == '1'? this.trabajo.certificacion = true : this.trabajo.certificacion = false;
    
    /* NUEVO TRABAJO */
    return this.newTrabajo(this.trabajo);
  }

  /* USERS */
  getUser = ( uid: string ) => this.http.get(`${ this.url }/users/${ uid }.json`);
  newUser = ( user: UserDB ) => this.http.put(`${ this.url }/users/${ user.uid }.json`, user);
  deleteUser = ( uid: string ) => this.http.delete(`${ this.url }/users/${ uid }.json`).subscribe();
  resetUser = () => this.user = new UserDB();

  /* TRABAJO */
  getTrabajo = ( uid: string, tid: string ) => this.http.get(`${ this.url }/trabajos/${uid}/${tid}.json`);
  getTrabajos = () => this.http.get(`${ this.url }/trabajos/${ this.user.uid }.json`);
  newTrabajo = ( trabajo: Trabajo ) => this.http.post(`${ this.url }/trabajos/${trabajo.uid}.json`, trabajo);
  deleteTrabajo = ( uid: string, tid: string ) => this.http.delete(`${this.url}/trabajos/${uid}/${tid}.json`);
  resetTrabajo = () => this.trabajo = new Trabajo();

  /* ACTUALIZAR TRABAJOS DEL USUARIO */
  actualizarPostulacion = ( tid: string ) =>{
      this.user.postulaTrabajo=true;
      if(!this.user.trabajos) this.user.trabajos = [];
      this.user.trabajos.push(tid);
      return this.http.put(`${ this.url }/users/${ this.user.uid }.json`, this.user )
  }

  /******************* PAGO *******************/

  /*PAYPAL*/
  actualizarInscripcion = () =>{
      this.user.inscripcion = 5;
      this.user.pago = true;
      this.user.metodo = 'paypal';
      return this.http.put(`${ this.url }/users/${ this.user.uid }.json`, this.user );
  }

  /*BROU*/
  actualizarInscripcionBrou = ( number: string, text: string ) =>{
    this.user.inscripcion = 5;
    this.user.pago = false;
    this.user.metodo = 'brou';
    this.user.brou = { number: number, text: text };
    return this.http.put(`${ this.url }/users/${ this.user.uid }.json`, this.user );
  }

  /*FREEPASS*/
  actualizarInscripcionFree = ( cod: string ) =>{
    this.user.inscripcion = 5;
    this.user.pago = true;
    this.user.metodo = 'free';
    this.user.type = cod;
    return this.http.put(`${ this.url }/users/${ this.user.uid }.json`, this.user );
  }

  private fromJSONtoArray( usersObj : Object ){

    const usersArray : UserDB[] = [];
    if(usersObj === null) return [];

    Object.keys(usersObj)
      .forEach( key =>{
        const user: UserDB = usersObj[key];
        usersArray.push(user);
    })

    return usersArray;
  }

}
