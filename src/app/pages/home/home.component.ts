import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService ) { }

  ngOnInit(): void {
  }

  registrarse(){
    if(!this.auth.user.uid){ this.router.navigateByUrl('/registrarse-1')}
    else{ this.router.navigateByUrl(`/registrarse-${ this.auth.user.inscripcion }`)}
  }
}
