import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoComponent } from '../../../components/dialogs/video.component';
import { MatDialog } from '@angular/material/dialog';
import { TrabajosService } from '../../../services/trabajos.service';
import { VariablesService } from '../../../services/variables.service';

@Component({
    selector: 'app-usuario-detalle',
    templateUrl: './dialogos.component.html',
    styleUrls: ['../sesion-de-trabajo.component.css']
})
export class DialogosComponent implements OnInit {

    sesion: any;
    id: string;

    constructor(
        private route: ActivatedRoute,
        private data: DataService,
        private router: Router,
        public trabajos: TrabajosService,
        public dialog: MatDialog,
        public _var: VariablesService
    ){
        this.route.parent.params.subscribe(
            (params) =>{
                this.id = params.id;
                this.sesion = this.data.getSesion(params.id)
            })
    }


    t = ( tid:string ) => this.trabajos.getTrabajo( tid );
    irAlTrabajo = ( uid:string, key:string) => this.router.navigateByUrl('poster/'+uid+'/'+key);
    openDialog = ( mp4: string ) =>{
        const dialogRef = this.dialog.open(VideoComponent, { data: { mp4 }} );
    }


    ngOnInit() {
    }

}