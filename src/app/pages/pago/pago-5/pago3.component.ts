import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-pago3',
  templateUrl: './pago3.component.html',
  styleUrls: ['./pago3.component.css']
})
export class Pago3Component implements OnInit {

  constructor( 
    private router: Router,
    public auth: AuthService ) { }

  ngOnInit(): void {
  }

  volverAlHome(){ this.router.navigateByUrl('home') }

}
