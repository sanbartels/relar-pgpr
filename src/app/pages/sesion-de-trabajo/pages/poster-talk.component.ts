import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-usuario-detalle',
    template: `
        <article class="bg-transparente p-5 text-white">
            <h5 class="pb-4">POSTER TALKS SELECCIONADOS A PARTIR DEL MES DE AGOSTO</h5>
            <p>Selección y compilación de hasta 30 videos de un minuto de duración, que abarcan la pluralidad de investigaciones 
            realizadas en Latinoamérica sobre las diferentes sesiones de trabajo.</p>
        </article>
    `,
    styleUrls: ['../sesion-de-trabajo.component.css']
})
export class PosterTalkComponent implements OnInit {

    sesion: any;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ){
        /* GET ID */
        const id : string = this.route.snapshot.paramMap.get('id');
        this.sesion = this.data.getSesion(id);
    }

    ngOnInit() {
    }

}