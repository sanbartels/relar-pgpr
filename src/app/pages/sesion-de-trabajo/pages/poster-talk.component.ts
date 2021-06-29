import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-usuario-detalle',
    template: `
        <article class="bg-transparente p-5 text-white">
            <h5 class="pb-4">POSTER TALKS</h5>
            <p>Al culminar las dos Charlas Magistrales, se exhibirán los vídeos minutos de todos aquellos trabajos aceptados y sugeridos a Póster Talk por la dupla coordinadora de esta sesión.</p>
            <p>Cada presentador/a realizará un video, de un minuto de duración, donde relate los principales puntos de su trabajo, teniendo en cuenta: introducción, objetivo/pregunta de investigación, metodología, resultados-discusión y conclusiones.</p>
            <p>Se promueve este espacio como una ventanilla de exhibición y reconocimiento de trabajos destacados.</p>
            <p>Los PÓSTER TALK son una excelente oportunidad para despertar el interés de otros colegas respecto a los avances y/o resultados de tu investigación. Así, al finalizar la jornada, podrás intercambiar, en vivo, con ellas y ellos, en la SESIÓN de PÓSTER.</p>
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