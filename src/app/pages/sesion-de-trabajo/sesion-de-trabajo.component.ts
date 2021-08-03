import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-sesion-de-trabajo',
  templateUrl: './sesion-de-trabajo.component.html',
  styleUrls: ['./sesion-de-trabajo.component.css']
})
export class SesionDeTrabajoComponent implements OnInit {

  sesion: any;
  id: string;

  constructor( 
    public data: DataService,
    public lang: LangService,
    private route: ActivatedRoute,
  ){
    /* GET ID */
    this.route.params.subscribe(
      (resp) =>{
        this.sesion = this.data.getSesion(resp.id);
        this.id = resp.id;
      },
      (error) => console.log(error)
    )
  }

  ngOnInit(): void {
  }

}
