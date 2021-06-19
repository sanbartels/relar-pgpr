import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private snackBar : MatSnackBar ) {
  }
  saveUser($event: any){
    this.snackBar.open('Bienvenido', 'Aceptar', { duration: 3000 });
    this.router.navigateByUrl('/home');
  }

  registrarse(){
    this.router.navigateByUrl('/registrarse-1');
  }

  handleError($event: any){
    this.snackBar.open('A ocurrido un error inesperado', 'Aceptar', { duration: 3000 });
  }

  providers = AuthProvider;
}
