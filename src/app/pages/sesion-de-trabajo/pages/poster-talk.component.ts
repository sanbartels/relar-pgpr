import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-usuario-detalle',
    templateUrl: './poster-talk.component.html',
    styleUrls: ['../sesion-de-trabajo.component.css']
})
export class PosterTalkComponent implements OnInit {

    sesion: any;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
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