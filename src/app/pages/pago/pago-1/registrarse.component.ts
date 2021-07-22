import { Component, OnInit } from '@angular/core';
import { AuthProvider, Theme} from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(
    private router: Router,
    private snackBar : MatSnackBar,
    public auth: AuthService
  ) {}
  
  ngOnInit(): void {}

  providers = AuthProvider;
  themes = Theme;

  /* NAVEGACIÓN */
  continuar = () => this.router.navigateByUrl('/registrarse-2');
  goToLogin = () => this.router.navigateByUrl('/login');

  /* REGISTRARSE */
  saveUser(event: any){
    this.snackBar.open('El usuario se creó correctamente', 'Aceptar', { duration: 3000 });
    this.router.navigateByUrl('/registrarse-2');
  }

  handleError(event: any){
    if(event.code == "auth/email-already-in-use" ){
      this.snackBar.open('Ya hay un usuario registrado con este e-mail', 'Aceptar', { duration: 3000 });
    }else{
      this.snackBar.open('Ha ocurrido un error inesperado', 'Aceptar', { duration: 3000 });
    }
  }

  /* USER SIGN OUT */
  signOut(){
    this.auth.resetUser();
    this.auth.resetTrabajo();
    this.router.navigateByUrl('home');
  }

}
