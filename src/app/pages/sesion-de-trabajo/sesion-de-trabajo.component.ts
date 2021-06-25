import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ){
    /* GET ID */
    this.router.events.subscribe(()=>{
      const id : string = this.route.snapshot.paramMap.get('id');
      this.id = id;
      this.sesion = this.data.getSesion(id);
    })
  }

  ngOnInit(): void {
  }

}
