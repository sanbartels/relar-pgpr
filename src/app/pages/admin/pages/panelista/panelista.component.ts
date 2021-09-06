import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { AdminService } from '../../../../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-panelista',
  templateUrl: './panelista.component.html',
  styleUrls: ['./panelista.component.css']
})
export class PanelistaComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  panelistas = [];

  constructor(
    private formBuilder: FormBuilder,
    public data: DataService,
    private admin: AdminService,
    private snackBar : MatSnackBar,
    private router: Router
  ) {
    this.panelistas = this.data.fromJSONtoArray(this.data.data.panelistas);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      lang:          ['_es', [ Validators.required ]],
      name:          ['', [ Validators.required ]],
      bio:           ['']
    })
  }

  save(){
    this.form.markAllAsTouched();
    this.actualizarConferencista();
    this.submitted = true;
  }

  actualizarConferencista(){
    const value = this.form.value;
    /* CALL ADMIN SERVICE */
    this.admin.setPanelista( { "bio": value.bio }, value.lang, value.name).subscribe(
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