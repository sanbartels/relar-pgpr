import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private afa: AngularFireAuth ) {
  }

  providers = AuthProvider;

  /* LOGIN */
  saveUser($event: any): void{
    this.snackBar.open('Bienvenido', 'Aceptar', { duration: 3000 });
    this.router.navigateByUrl('/home');
  }

  handleError(event: any): void{
    if(event.code == "auth/wrong-password" ){
      this.snackBar.open('Contraseña incorrecta/ Si posee cuenta Google, inicie sesión por ese medio', 'Aceptar', { duration: 3000 });
    }else if(event.code == "auth/user-not-found"){
      this.snackBar.open('No existe usuario registrado con este e-mail', 'Aceptar', { duration: 3000 });
    }else{
      this.snackBar.open('Ha ocurrido un error inesperado', 'Aceptar', { duration: 3000 });
    }
  }

  resetPassword(){
    this.afa.sendPasswordResetEmail(document.getElementsByTagName('input')[0].value)
      .then(() => this.snackBar.open('Se envió un e-mail a su casilla de correo', 'Aceptar', { duration: 3000 }) )
      .catch((event) =>{
        if(event.code == "auth/invalid-email"){
          this.snackBar.open('La dirección de correo no es válida', 'Aceptar', { duration: 3000 });
        }else if(event.code == "auth/user-not-found"){
          this.snackBar.open('No existe usuario registrado con este e-mail', 'Aceptar', { duration: 3000 });
        }else{
          this.snackBar.open('Ha ocurrido un error inesperado', 'Aceptar', { duration: 3000 });
        }
      })
  }

  registrarse(): void{
    this.router.navigateByUrl('/registrarse-1');
  }



}
