import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conferencista',
  templateUrl: './conferencista.component.html',
  styleUrls: ['./conferencista.component.css']
})
export class ConferencistaComponent implements OnInit {

  conferencista: any;

  constructor(
    private snackBar : MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  

}
