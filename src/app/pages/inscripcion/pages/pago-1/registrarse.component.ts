import { Component, OnInit } from '@angular/core';
import { AuthProvider, Theme } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['../../inscripcion.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(
    private router: Router,
    private snackBar : MatSnackBar,
  ) {}
  
  ngOnInit(): void {}

  providers = AuthProvider;
  themes = Theme;

  login(){
    this.router.navigateByUrl('/login');
  }

  saveUser($event: any){
    this.snackBar.open('El usuario se creó correctamente', 'Aceptar', { duration: 3000 });
    console.log($event);
    this.router.navigateByUrl('/registrarse-2');
  }

  handleError($event: any){
    this.snackBar.open('A ocurrido un error inesperado', 'Aceptar', { duration: 3000 });
  }

}
