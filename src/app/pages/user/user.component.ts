import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Trabajo } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../../components/dialogs/delete-confirmation.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  submitted = false;
  changeSubmitted = ( event ) => { this.submitted = event }

  constructor( 
    public auth: AuthService,
    public dialog: MatDialog,
    private router: Router ) {
      this.importarTrabajos()
  }

  /* USER SIGN OUT */
  signOut(){
    this.auth.resetUser();
    this.auth.resetTrabajo();
    this.router.navigateByUrl('home');
  }

  /* LINK INSCRIPCIÓN INCOMPLETA */
  inscripcion(): void { this.router.navigateByUrl(`/registrarse-${this.auth.user.inscripcion}`); }
  /* LINK POSTULAR TRABAJO */
  postularTrabajo(): void { this.router.navigateByUrl(`/postular-trabajo`); }

  /* USER TRABAJOS PUBLICADOS */
  trabajosLoadded = false;
  trabajos: Trabajo[] = [];

  importarTrabajos(){
    let i = 0;
    while(i<20){
      setTimeout(() => {
        if(this.auth.logged){
          if(this.auth.user.postulaTrabajo){
            this.auth.getTrabajos().subscribe(
              (resp) =>{
                this.trabajos = this.fromJSONtoArray(resp);
                this.trabajosLoadded = true;
              },
              (error) =>{
                console.log(error);
              }
            )
          }else{
            this.trabajosLoadded = true
          }
        }
      }, 800);
      if(this.trabajosLoadded=true) break;
    }
  }

  /* ARRAY DE TRABAJOS */
  private fromJSONtoArray( trabajosObj : Object ){

    const trabajosArray : Trabajo[] = [];
    if( trabajosObj === null) return [];

    Object.keys(trabajosObj)
      .forEach( key =>{
        const trabajo: Trabajo = trabajosObj[key];
        trabajo.tid = key;
        trabajosArray.push(trabajo);
    })

    return trabajosArray;
  }

  /* ELIMINAR TRABAJOS */
  openDialog = ( tid: string ) =>{
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, { data: { uid: this.auth.user.uid, tid: tid, trabajos: this.trabajos }} );
  }

}