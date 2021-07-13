import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( 
    public auth: AuthService,
    private router: Router ) {
  }

  volverAlHome(){
    this.auth.resetUser();
    this.auth.resetTrabajo();
    this.router.navigateByUrl('home');
  }

  inscripcion(): void {
    this.router.navigateByUrl(`/registrarse-${this.auth.user.inscripcion}`);
  }

  ngOnInit(): void {
  }

}
