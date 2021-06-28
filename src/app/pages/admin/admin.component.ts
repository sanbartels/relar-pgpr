import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { UserDB } from '../../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usersArray: UserDB[];
  categorias: string[] = [ "Investigador/ Profesional socio ALAR", "Investigador/ Prefesional", "Estudiante socio ALAR", "Estudiante", "Productor"]

  constructor(
    private admin: AdminService
  ){
    this.admin.getUsers().subscribe(
      (resp) => this.usersArray = this.fromJSONtoArray(resp),
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
