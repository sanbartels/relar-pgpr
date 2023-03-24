import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { VariablesService } from '../../services/variables.service';
import { LayoutgService } from '../../services/layout.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  tid: string;
  uid: string;
  trabajo: any;
  email: string;

  constructor(
    public auth: AuthService,
    public route: ActivatedRoute,
    public router: Router,
    public data: DataService,
    public _var: VariablesService
  ) {
    this.tid = this.route.snapshot.params.tid;
    this.uid = this.route.snapshot.params.uid;
    this.auth.getTrabajo( this.uid, this.tid ).subscribe(
      resp =>{
        this.trabajo = resp;
        this.trabajo.tid = this.tid;
      },
      error => console.log(error)
    )
    this.auth.getEmail( this.uid ).subscribe(
      resp => this.email = resp,
      error => console.log(error)
    )
  }
  
  ngOnInit(): void {
  }

  dividirTexto(txt:string){
    txt=txt.slice(txt.length/2);
    let match = /(\s)/.exec(txt);
    return match.index+txt.length;
  }

  volver = () => this.router.navigateByUrl(this._var.navegateTo)
}
