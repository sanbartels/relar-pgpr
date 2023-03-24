import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { TranslateService } from '@ngx-translate/core';
import { LayoutgService } from '../../services/layout.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor( 
    public auth: AuthService,
    public data: DataService,
    private router: Router,
    private translate: TranslateService,
    public layout: LayoutgService,
    private snackBar : MatSnackBar,
  ) {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  pdf(){
    window.open('https://firebasestorage.googleapis.com/v0/b/relar-pgpr.appspot.com/o/Memoria_RELAR-PGPR-2021.pdf?alt=media&token=18664e1f-7c83-43b1-bd05-715addefc508', '_blank');
  }



  /*
  vivo(){
    if(!this.auth.user){ return }
    if(this.auth.user.inscripcion<4){
      this.snackBar.open('Debe completar su inscripción para esta acción', 'Aceptar', { duration: 3000 });
      this.router.navigateByUrl('/registrarse-'+this.auth.user.inscripcion);
    
    }else if(this.data.getZoom()){
      window.open(this.data.getZoom(), '_blank');
    }else{
      this.snackBar.open('No hay ninguna actividad desarrollándose en este momento', 'Aceptar', { duration: 3000 });
    }
  }
  */
}