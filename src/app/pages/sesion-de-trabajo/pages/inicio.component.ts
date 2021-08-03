import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { LangService } from '../../../services/lang.service';

@Component({
    selector: 'app-inicio-sesion',
    templateUrl: './inicio.component.html',
    styleUrls: ['../sesion-de-trabajo.component.css']
})
export class InicioSesionComponent implements OnInit {

    sesion: any;

    constructor(
        private data: DataService,
        public lang: LangService,
        private route: ActivatedRoute,
    ){
        /* GET ID */
        this.route.params.subscribe(
            (resp) => this.sesion = this.data.getSesion(resp.id),
            (error) => console.log(error)
        )
    }

    ngOnInit() {
    }

}