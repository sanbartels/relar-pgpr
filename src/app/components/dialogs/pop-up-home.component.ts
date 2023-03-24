import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pop-up',
  template: `
  <div class="text-center" style="width: 500px; max-width: 100%;">
    <img src="/assets/icon.png" alt="Icono RELAR-PGPR" class="img-fluid w-50">
    <h3 class="mt-3" style="font-family: 'Seravek', sans-serif;">Ingrese a la actividad en curso</h3>
    <button mat-raised-button
            mat-dialog-close
            (click)="ingresar()"
            style="background-color: #16f64b;">
            Ingresar
    </button>
  </div>
  `
})
export class PopUpComponent {
  
  @Inject(MAT_DIALOG_DATA) public data: any
  
  constructor(
    private auth: AuthService,
    private router: Router,
    private snackBar : MatSnackBar
  ){ }

  ingresar(){
    if(this.auth.user&&this.auth.user.inscripcion>3){
      window.open(this.data.url, '_blank');
    }
    else{
      this.snackBar.open('Debe finalizar su inscripción para esta acción', 'Aceptar', { duration: 3000 });
      this.router.navigateByUrl('/registrarse-'+this.auth.user.inscripcion);
    } 
  }

}