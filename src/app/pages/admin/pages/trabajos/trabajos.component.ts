import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { DataService } from '../../../../services/data.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  tema = '1';

  constructor(
    public admin: AdminService,
    public data: DataService,
    public auth: AuthService
  ){}

  ngOnInit(): void {
  }

  filtrarTrabajos = (trabajos: any) => trabajos.filter( trabajo => trabajo.tema == this.tema );
  openNewTab = (url: string) => window.open(url, '_blank');
}
