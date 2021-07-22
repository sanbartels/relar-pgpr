import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-delete-confirmation',
  template: `
  <h2 mat-dialog-title>¿Está seguro que quiere eliminar su postulación?</h2>
  <mat-dialog-actions align="center">
  <button mat-raised-button color="warn" [mat-dialog-close]="true" (click)="eliminarTrabajo()">Eliminar</button>
    <button mat-raised-button mat-dialog-close cdkFocusInitial>Cancelar</button>
  </mat-dialog-actions>
  `
})
export class DeleteConfirmationComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService,
    private snackBar : MatSnackBar
  ) {}

  eliminarTrabajo = () => {
    this.auth.deleteTrabajo( this.data.uid, this.data.tid ).subscribe(
      ()=>{
        this.snackBar.open('Trabajo eliminado', 'Aceptar', { duration: 3000 });
        let i: number;
        this.data.trabajos.forEach( (element, index: number) => {
          if( element.tid == this.data.tid ){ i= index; }
        });
        if( i!==-1){
          this.data.trabajos.splice(i,1);
        }
      },
      ()=> this.snackBar.open('Se ha producido un error, intentelo nuevamente', 'Aceptar', { duration: 3000 }),
    )
  }

}
