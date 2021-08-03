import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { LangService } from '../../../services/lang.service';

@Component({
    selector: 'app-inicio-mesa',
    templateUrl: './inicio.component.html',
    styleUrls: ['../mesas-redondas.component.css']
})
export class InicioMesaComponent {

    mesa: any;

    constructor(
        private data: DataService,
        public lang: LangService,
        private route: ActivatedRoute
    ){
        /* GET ID */
        this.route.params.subscribe(
            (resp) => this.mesa = this.data.getMesa(resp.id),
            (error) => console.log(error)
        )
    }

}