import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
  <article>
    <div class="m-5">
        <h3><span class="text-white">CHARLA MAGISTRAL</span><br>
        {{conferencista.nombre}}<br>
        {{conferencista.pais}}</h3>
        <h3 class="text-white my-3">{{conferencista.horario}} HRS</h3>
    </div>
    <div class="bg-transparente">
        <h5 class="px-5 pt-5 pb-4 text-white">{{conferencista.titulo}}</h5>
        <p class="px-5 pb-5 text-white border-bottom-green">{{conferencista.texto}}</p>
        <p class="p-5 text-white">{{conferencista.bio}}</p>
    </div>
  </article>
  `,
  styleUrls: ['../sesion-de-trabajo.component.css']
})
export class CongresistaComponent implements OnInit {

  conferencista: any;

  constructor(
      private data: DataService,
      private route: ActivatedRoute,
      private router: Router
  ){
      /* GET ID */
      this.router.events.subscribe(()=>{
        const cid : string = this.route.snapshot.paramMap.get('cid');
        this.conferencista = this.data.getConferencista(cid);
      })
  }

  ngOnInit() {
  }

}