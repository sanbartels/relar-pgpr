import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-home-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {


  constructor(
    private router: Router,
    private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  registrarse(): void {
    if (!this.auth.user.uid) { this.router.navigateByUrl('/registrarse-1'); }
    else { this.router.navigateByUrl(`/registrarse-${this.auth.user.inscripcion}`); }
  }
}
