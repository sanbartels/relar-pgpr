import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDB } from '../../../models/user.model';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  form: FormGroup;
  showForm: boolean = false;
  checkShowForm(e: boolean){
    this.showForm = e;
  }

  showCategoria = (value) => console.log(value);

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private snackBar : MatSnackBar,
    private router: Router )
  {
      this.form = this.formBuilder.group({
        name:       ['', [ Validators.required, Validators.minLength(2) ]],
        lastname:   ['', [ Validators.required, Validators.minLength(2) ]],
        mail:       ['', [ Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$') ]],
        telefono:   ['', [ Validators.required, Validators.pattern('[\+]?[0-9]{8}[0-9]*') ]],
        sexo:       ['', [ Validators.required ]],
        formacion:  ['', [ Validators.required ]],
        categoria:  ['', [ Validators.required ]],
        institucion:['', []],
        seccion:    ['', []],
        pais:       ['', [ Validators.required ]],
        ciudad:     ['', [ Validators.required, Validators.minLength(2) ]],
        dni:        ['', [ Validators.required, Validators.minLength(6) ]],
        fechaDeNacimiento: ['', [ Validators.required, Validators.pattern('(0?[1-9]|[1-2][0-9]|3[0-1])([\/]|[-])(0?[1-9]|1[0-2])([\/]|[-])(19[0-9]{2}|20[0-1][0-9]|202[0-1])') ]]
      })
  }

  isInvalid( nameInput : string ){ return this.form.get(nameInput).invalid && this.form.get(nameInput).touched; }
  load(){
    this.form.reset({
      name: this.auth.user.name,
      lastname: this.auth.user.lastname,
      mail: this.auth.user.email,
      telefono: this.auth.user.telefono,
      sexo: this.auth.user.sexo,
      formacion: this.auth.user.formacion,
      categoria: this.auth.user.categoria,
      institucion: this.auth.user.institucion,
      seccion: this.auth.user.seccion,
      pais: this.auth.user.pais,
      ciudad: this.auth.user.ciudad,
      dni: this.auth.user.dni,
      fechaDeNacimiento: this.auth.user.fechaDeNacimiento
  }) } //this.form.reset({})
  save(){
    this.form.markAllAsTouched();
    if(this.form.status=='VALID'){
      this.auth.saveDatosPersonales(this.form.value).subscribe( (resp) =>{
        this.snackBar.open('Sus datos se han guardado correctamente', 'Aceptar', { duration: 3000 });
        this.router.navigateByUrl('registrarse-3');
        console.log(resp);
      }, (error) =>{
        this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 }) 
      })
    }
  }

  ngOnInit(): void {
  }

}
