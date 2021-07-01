import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mesas-redondas',
  templateUrl: './mesas-redondas.component.html',
  styleUrls: ['./mesas-redondas.component.css']
})
export class MesasRedondasComponent implements OnInit {

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
      this.sesion = this.data.getMesa(id);
    })
  }

  ngOnInit(): void {
  }


}
