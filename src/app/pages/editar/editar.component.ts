import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Trabajo } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  form: FormGroup = this.formBuilder.group({
    tema:       ['', [ Validators.required ]],
    titulo :    ['', [ Validators.required, Validators.minLength(2) ]],
    autores:    ['', [ Validators.required, Validators.minLength(2) ]],
    expone:     ['', [ Validators.required, Validators.minLength(2) ]],
    institucion:['', [ Validators.required, Validators.minLength(2) ]],
    resumen:    ['', [ Validators.required, Validators.minLength(2) ]]
  })

  trabajo: any;
  loaded = false;
  submitted = false;
  changeSubmitted = ( event ) => { this.submitted = event }
  volverAlHome(){ this.router.navigateByUrl('user') }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private snackBar : MatSnackBar,
  ) {
    if(this.auth.user.uid){
      this.auth.getTrabajo(this.auth.user.uid, this.route.snapshot.params.tid).subscribe(
        (resp) =>{
          this.trabajo = resp;
          this.load(resp);
          this.loaded = true;
          console.log(this.trabajo);
          console.log(this.auth.user.uid);
        },
        (error) => console.log(error)
      )
    }else{
      this.router.navigateByUrl('/user');
    }
  }

  load( data: any ){
    this.form.reset({
      tema: data.tema,
      titulo: data.titulo,
      autores: data.autores,
      expone: data.expone,
      institucion: data.institucion,
      resumen: data.resumen
  })}

  save(){
    this.actualizarTrabajo( this.form.value).subscribe(
      (resp) =>{
        this.snackBar.open('Su postulación se ha cargado correctamente', 'Aceptar', { duration: 3000 });
        this.router.navigateByUrl('/user');
      },
      (error) => this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 })
    )
  }

  actualizarTrabajo = ( data: any ) =>{
    /* SET NEW TRABAJO */
    let newTrabajo = this.trabajo;
    /* SAVE DATA */
    newTrabajo.tema = data.tema;
    newTrabajo.titulo = data.titulo;
    newTrabajo.autores = data.autores;
    newTrabajo.expone = data.expone;
    newTrabajo.institucion = data.institucion;
    newTrabajo.resumen = data.resumen;
    
    /* ACTUALIZAR TRABAJO */
    return this.auth.actualizarTrabajoPropio( this.route.snapshot.params.tid, this.trabajo );
  }

  isInvalid( nameInput : string ){ return this.form.get(nameInput).invalid && this.form.get(nameInput).touched; }

}
