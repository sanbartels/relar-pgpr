import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pago2',
  templateUrl: './pago2.component.html',
  styleUrls: ['./pago2.component.css']
})
export class Pago2Component implements OnInit {

  showEbrou = false;
  nota = false;
  showPassError = false;

  brou =  {
    number: '',
    text: ''
  }

  private password = 'relar.free';

  saltarPago(){
    this.router.navigateByUrl('registrarse-5');
  }

  onClickMe(pass: string) {
    if(pass==this.password){
      this.showPassError = false;
      this.auth.actualizarInscripcionFree().subscribe( (resp) =>{
        this.snackBar.open('Los datos de inscripción se han actualizado correctamente', 'Aceptar', { duration: 3000 });
        this.router.navigateByUrl('registrarse-5');
      }, (error) =>{
        this.snackBar.open('Se ha producido un error, inténtelo nuevamente', 'Aceptar', { duration: 3000 }) 
      })
    }else{
      this.showPassError = true;
    }
  }

  
  constructor( 
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private router: Router ) { }

  ngOnInit(): void {
  }

  save( form : NgForm ){
    Object.values( form.controls ).forEach( value => value.markAllAsTouched() )
    if( form.status=='VALID'){
        this.auth.actualizarInscripcionBrou( form.value.number, form.value.text ).subscribe( (resp) =>{
        this.snackBar.open('Los datos de su pago se han guardado correctamente', 'Aceptar', { duration: 3000 });
        this.router.navigateByUrl('registrarse-5');
      }, (error) =>{
        this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 }) 
      })
    }
  }

}
