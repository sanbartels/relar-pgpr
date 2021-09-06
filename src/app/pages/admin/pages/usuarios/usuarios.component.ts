import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { UserDB } from '../../../../models/user.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  categorias: string[] = [ "I/P ALAR", "I/P", "Est ALAR", "Est", "Prod"]

  constructor(
    public admin: AdminService
  ){}

  ngOnInit(): void {
  }

}
