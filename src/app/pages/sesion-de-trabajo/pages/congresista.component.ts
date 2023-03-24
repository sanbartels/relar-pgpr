import { Component, ElementRef, OnChanges, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { LangService } from '../../../services/lang.service';
import { StorageService } from '../../../services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './congresista.component.html',
  styleUrls: ['../sesion-de-trabajo.component.css']
})
export class CongresistaComponent implements OnInit {

  conferencista: any;
  url: string;

  constructor(
    private data: DataService,
    public lang: LangService,
    private route: ActivatedRoute,
    public auth: AuthService,
    private storage: StorageService,
    public snackBar: MatSnackBar,
    private elRef: ElementRef
  ){
      /* GET ID */
      this.route.params.subscribe(
        (resp) =>{
          this.conferencista = this.data.getConferencista(resp.cid);
          this.storage.getDownloadURL(`videos/${resp.cid}.mp4`).subscribe(
            resp =>{
              this.url = resp;
              let player = this.elRef.nativeElement.querySelector('video');
              player.load();
            },
            error =>{
              error.code=='storage/unauthorized'? this.snackBar.open('Debe ser un usuario registrado para ver el video', 'Aceptar', { duration: 3000 }) : this.snackBar.open('Video no disponible', 'Aceptar', { duration: 3000 });
              console.log(error);
              console.log(error.code);
            }
          )
        },
        (error) => console.log(error)
      );
  }

  ngOnInit() {
  }

}