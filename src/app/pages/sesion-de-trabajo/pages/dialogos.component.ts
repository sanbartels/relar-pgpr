import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-usuario-detalle',
    template: `
        <article class="bg-transparente p-5 text-white">
            <h5 class="pb-4">Dialogos de investigación</h5>
            <p>Actividad de intercambio de 1 hora de duración. A partir de los resúmenes de trabajos postulados al congreso, 
            se seleccionarán tres de ellos, a los que se les solicitará la realización de un video, de hasta 15 minutos de 
            duración cada uno. Estos estarán accesibles en la página web de la RELAR-PGPR antes y durante el congreso y 
            conformarán los insumos para provocar los diálogos de intercambio entre toda la comunidad participante.</p>
        </article>
    `,
    styleUrls: ['../sesion-de-trabajo.component.css']
})
export class DialogosComponent implements OnInit {

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