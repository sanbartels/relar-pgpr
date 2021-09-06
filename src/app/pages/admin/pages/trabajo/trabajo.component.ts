import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  tid: string;

  constructor(
   public admin: AdminService,
   public route: ActivatedRoute,
   private snackBar : MatSnackBar
  ){
    this.tid = this.route.snapshot.params.tid;
  }

  ngOnInit(): void {
  }

  t = () => this.admin.trabajosObj[this.tid];
  si = ( value: boolean ) => value? 'Si' : 'No';

  aprobarTrabajo = () =>{
    this.admin.aprobarTrabajo( this.t().uid, this.tid ).subscribe(
      (resp) =>{
        this.admin.trabajosObj[this.tid].aprobado = true;
        this.snackBar.open('Trabajo aprobado', 'Aceptar', { duration: 3000 });
      },
      (error) =>{
        this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 });
      }
  )};
  desaprobarTrabajo = () =>{
    this.admin.desaprobarTrabajo( this.t().uid, this.tid ).subscribe(
      (resp) =>{
        this.admin.trabajosObj[this.tid].aprobado = false;
        this.snackBar.open('Trabajo desaprobado', 'Aceptar', { duration: 3000 });
      },
      (error) =>{
        this.snackBar.open('Se ha producido un error', 'Aceptar', { duration: 3000 });
      }
  )};
}
