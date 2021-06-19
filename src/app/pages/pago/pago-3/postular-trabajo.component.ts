import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-postular-trabajo',
  templateUrl: './postular-trabajo.component.html',
  styleUrls: ['./postular-trabajo.component.css']
})
export class PostularTrabajoComponent implements OnInit {

  showForm: boolean = false;
  showFile: boolean = false;
  form2: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: StorageService,
    private snackBar : MatSnackBar,
    private router: Router
  ) {
    this.form2 = this.formBuilder.group({
      tema:       ['', [ Validators.required ]],
      titulo :    ['', [ Validators.required, Validators.minLength(2) ]],
      autores:    ['', [ Validators.required, Validators.minLength(2) ]],
      expone:     ['', [ Validators.required, Validators.minLength(2) ]],
      institucion:['', [ Validators.required, Validators.minLength(2) ]],
      resumen:    ['', [ Validators.required, Validators.minLength(2) ]],
      postertalk: ['', [ Validators.required ]],
      dialogos:   ['', [ Validators.required ]],
      certificacion:   ['', [ Validators.required ]],
      beca:       ['0', [ Validators.required ]],
      tipoBeca:   [''],
      beca1:      ['0', []],
      beca2:      ['0', []],
      file:       [null, []]
    });

    /* FOO VALIDATORS */
    this.form2.get('beca').valueChanges
    .subscribe( (resp) => {
      if(resp == '1') {
        this.form2.get('tipoBeca').setValidators(Validators.required);
        this.form2.get('beca1').setValidators(Validators.pattern('1'));
        this.form2.get('beca2').setValidators(Validators.pattern('1'));
      } else if(resp == '0'){
        this.form2.controls['tipoBeca'].setValue('');
        this.form2.controls['file'].setValue(null);
        this.form2.get('tipoBeca').clearValidators();
        this.form2.get('beca1').clearValidators();
        this.form2.get('beca2').clearValidators();
        this.form2.get('tipoBeca').updateValueAndValidity();
        this.form2.get('beca1').updateValueAndValidity();
        this.form2.get('beca2').updateValueAndValidity();
      }
    });
    this.form2.get('tipoBeca').valueChanges
    .subscribe( (resp) => {
      if(resp == 'ALAR') {
        this.showFile = true;
        this.form2.get('file').setValidators(Validators.required);
      } else{
        this.showFile = false;
        this.form2.get('file').clearValidators();
        this.form2.get('file').updateValueAndValidity();
      }
    });
  }

  save(){
    console.log(this.form2);
    this.form2.markAllAsTouched();
    if(this.form2.controls.file !== null&&this.form2.status=='VALID'){
      this.subirArchivo()
        .then(() =>{
          this.subirTrabajo();
        })
        .catch((error) => {
          this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 })
        })
    }
    else if(this.form2.status=='VALID'){
      this.subirTrabajo();
    }
  }

  subirTrabajo(){
    this.auth.saveTrabajo(this.form2.value).subscribe( (resp1) =>{
      this.auth.actualizarPostulacion( resp1['name'] ).subscribe( (resp2) =>{
        this.snackBar.open('Su postulación se ha cargado correctamente', 'Aceptar', { duration: 3000 });
        this.router.navigateByUrl('registrarse-4');
      }, (error) =>{
        this.auth.deleteTrabajo( this.auth.user.uid, resp1['name'] );
        this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 })
      }) 
      }, (error) =>{
      this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 }) 
    })
  }

  subirArchivo(){
    let archivo = this.form2.get('file');
    let name = this.auth.user.uid + '.pdf';
    return this.storage.subirCloudStorage(`comprobanteAlar/${name}`, archivo)
  };

  isInvalid( nameInput : string ){ return this.form2.get(nameInput).invalid && this.form2.get(nameInput).touched; }
  ngOnInit(): void {}
  
  no = () => this.router.navigateByUrl('/registrarse-4');
  si = () => this.showForm = true;
}
