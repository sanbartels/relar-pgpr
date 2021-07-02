import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-usuario-detalle',
    template: `
        <article class="bg-transparente p-5 my-5 text-white">
            <h5 class="pb-4">{{sesion.coordinadores}}</h5>
            <p>{{sesion.texto}}</p>
        </article>
    `,
    styleUrls: ['../sesion-de-trabajo.component.css']
})
export class IntroComponent implements OnInit {

    sesion: any;

    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private router: Router
    ){
        /* GET ID */
        this.router.events.subscribe(()=>{
            const id : string = this.route.snapshot.paramMap.get('id');
            this.sesion = this.data.getSesion(id);
        })
    }

    ngOnInit() {
    }

}