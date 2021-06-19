import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-sm',
  templateUrl: './navbar-sm.component.html',
  styleUrls: ['./navbar-sm.component.css']
})
export class NavbarSmComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
