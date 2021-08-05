import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { UserDB } from '../../../../models/user.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usersArray: UserDB[];
  categorias: string[] = [ "I/P ALAR", "I/P", "Est ALAR", "Est", "Prod"]

  constructor(
    private admin: AdminService
  ){
    this.admin.getUsers().subscribe(
      (resp) => this.usersArray = this.fromJSONtoArray(resp).sort((a, b) => a.lastname > b.lastname && 1 || -1),
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
  }

  private fromJSONtoArray( usersObj : Object ){
    const usersArray = [];
    if(usersObj === null) return [];
    Object.keys(usersObj)
      .forEach( (key) =>{
        const user: UserDB = usersObj[key];
        usersArray.push(user);
    })
    return usersArray
  }

}
