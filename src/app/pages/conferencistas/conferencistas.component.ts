import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Conferencista } from '../../models/conferencista.model';

@Component({
  selector: 'app-conferencistas',
  templateUrl: './conferencistas.component.html',
  styleUrls: ['./conferencistas.component.css']
})
export class ConferencistasComponent implements OnInit {

  conferencistas: Conferencista[];

  constructor( 
    private snackBar : MatSnackBar,
    private router: Router
  ){
  }

  ngOnInit(): void {
  }

}
