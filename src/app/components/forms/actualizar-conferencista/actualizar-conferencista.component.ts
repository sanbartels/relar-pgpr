import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-conferencista',
  templateUrl: './actualizar-conferencista.component.html',
  styleUrls: ['./actualizar-conferencista.component.css']
})
export class ActualizarConferencistaComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private snackBar : MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      lang:     ['_es', [ Validators.required ]],
      name:     ['', [ Validators.required ]],
      bio:      [''],
      titulo:   [''],
      texto:    ['']
    })
  }

  save(){
    this.form.markAllAsTouched();
    this.subirTrabajo();
    this.submitted = true;
  }

  subirTrabajo(){}
}