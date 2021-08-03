import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { AdminService } from '../../../../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-conferencista',
  templateUrl: './conferencista.component.html',
  styleUrls: ['./conferencista.component.css']
})
export class ConferencistaComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  conferencistas = [];

  constructor(
    private formBuilder: FormBuilder,
    public data: DataService,
    private admin: AdminService,
    private snackBar : MatSnackBar,
    private router: Router
  ) {
    this.conferencistas = this.data.fromJSONtoArray(this.data.data.conferencistas);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      lang:          ['_es', [ Validators.required ]],
      name:          ['', [ Validators.required ]],
      titulo:        [''],
      colaboradores: [''],
      texto:         [''],
      bio:           ['']
    })
  }

  save(){
    this.form.markAllAsTouched();
    this.actualizarConferencista();
    this.submitted = true;
  }

  actualizarConferencista(){
    console.log(this.form.value);
    const value = this.form.value;
    let data = this.data.data.conferencistas[value.name][value.lang];
    value.titulo.trim() == "" ? null : data.titulo = value.titulo;
    value.colaboradores.trim() == "" ? null : data.colaboradores = value.team;
    value.texto.trim() == "" ? null : data.texto = value.texto;
    value.bio.trim() == "" ? null : data.bio = value.bio;
    /* CALL ADMIN SERVICE */
    console.log(data);
    this.admin.setConferencista( data, value.lang, value.name).subscribe(
      (resp) =>{
        this.snackBar.open('La información se ha actualizado', 'Aceptar', { duration: 3000 });
        this.data.setData();
        this.router.navigateByUrl('admin');
      },
      (error) =>{
        this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 }) 
      }

    )
  }
}
