import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-inicio-mesa',
    templateUrl: './bio.component.html',
    styleUrls: ['../mesas-redondas.component.css']
})
export class BioComponent {

    bio: any;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ){
        /* GET ID */
        this.route.params.subscribe(
            (resp) => this.bio = this.data.getPanelista(resp.bio),
            (error) => console.log(error)
        )
    }

}