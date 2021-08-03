import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './congresista.component.html',
  styleUrls: ['../sesion-de-trabajo.component.css']
})
export class CongresistaComponent implements OnInit {

  conferencista: any;

  constructor(
      private data: DataService,
      public lang: LangService,
      private route: ActivatedRoute
  ){
      /* GET ID */
      this.route.params.subscribe(
        (resp) => this.conferencista = this.data.getConferencista(resp.cid),
        (error) => console.log(error)
      )
  }

  ngOnInit() {
  }

}