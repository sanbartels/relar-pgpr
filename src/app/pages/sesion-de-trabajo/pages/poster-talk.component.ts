import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoComponent } from '../../../components/dialogs/video.component';
import { TrabajosService } from '../../../services/trabajos.service';
import { MatDialog } from '@angular/material/dialog';
import { VariablesService } from '../../../services/variables.service';

@Component({
    selector: 'app-usuario-detalle',
    templateUrl: './poster-talk.component.html',
    styleUrls: ['../sesion-de-trabajo.component.css']
})
export class PosterTalkComponent implements OnInit {

    tema: any;
    id:string;
    postertalk: any[] = [];

    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private router: Router,
        public trabajos: TrabajosService,
        public dialog: MatDialog,
        public _var: VariablesService
    ){
        /* GET ID */
        this.route.parent.params.subscribe(
            (params) =>{
                this.id = params.id;
                this.tema = this.data.getSesion(params.id).tema;
                this.getPostertalk(this.tema);
            });
    }

    getPostertalk = ( sesion:number ) =>{
        if(this.trabajos.trabajosLoadded){
          this.postertalk = this.trabajos.getPostertalk(sesion);
        }else{
          setTimeout(() => {
            this.getPostertalk(sesion);
          }, 2000);
        }
      }

    ngOnInit() {
    }

    irAlTrabajo = ( uid:string, key:string) => this.router.navigateByUrl('poster/'+uid+'/'+key);
    openDialog = ( mp4: string ) =>{
        const dialogRef = this.dialog.open(VideoComponent, { data: { mp4 }} );
    }

}