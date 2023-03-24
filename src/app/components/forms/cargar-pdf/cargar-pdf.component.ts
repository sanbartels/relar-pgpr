import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileItem } from '../../../models/file.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../../dialogs/delete-confirmation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-pdf',
  templateUrl: './cargar-pdf.component.html',
  styleUrls: ['./cargar-pdf.component.css']
})
export class CargarPdfComponent implements OnInit {

  pdf: FileItem | null = null;
  mp4: FileItem | null = null;
  jpg: FileItem | null = null;

  cargarPdf = false;
  cargarMp4 = false;
  cargarJpg = false;

  @Input() trabajo: any;
  @Output() submittedEvent = new EventEmitter<boolean>();

  submitted = false;
  changeSubmitted = () => { this.submitted = !this.submitted; this.submittedEvent.emit(this.submitted); }

  constructor(
    private storage: StorageService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router
  ) {
  }

  handleFilePdf(event: any){
    if (event.target.files.length == 0){ return }
    if(event.target.files[0].type.match(/pdf/)){
      const file = event.target.files[0];
      const tid = this.trabajo.tid;
      const tidname = this.trabajo.tid + '.pdf';
      const uid = this.trabajo.uid;
      this.pdf = new FileItem( file, tid, tidname, uid );
    }else{
      this.snackBar.open('Formato incorrecto', 'Aceptar', { duration: 3000 })
    }
    console.log(this.pdf);
  }

  handleFileMp4(event: any){
    if (event.target.files.length == 0){ return }
    if (event.target.files[0].size>1024*1024*200){
      this.snackBar.open('El archivo supera el límite de carga - 200 MB', 'Aceptar', { duration: 3000 } )
    }else if(event.target.files[0].type.match(/mp4/)){
      const file = event.target.files[0];
      const tid = this.trabajo.tid;
      const tidname = this.trabajo.tid + '.mp4';
      const uid = this.trabajo.uid;
      this.mp4 = new FileItem( file, tid, tidname, uid );
    }else{
      this.snackBar.open('Formato incorrecto', 'Aceptar', { duration: 3000 })
    }
  }

  handleFileJpg(event: any){
    if (event.target.files.length == 0){ return }
    if(event.target.files[0].type.match(/image/)){
      const file = event.target.files[0];
      const tid = this.trabajo.tid;
      const tidname = this.trabajo.tid + '.jpg';
      const uid = this.trabajo.uid;
      this.jpg = new FileItem( file, tid, tidname, uid );
      console.log(this.jpg);
    }else{
      this.snackBar.open('Formato incorrecto', 'Aceptar', { duration: 3000 });
      console.log(event.target.files[0]);
    }
  }

  save( item: FileItem ){
    const url = this.storage.subirArchivo( item );
  }

  ngOnInit(): void {
  }

  /* NAVEGAR A EDITAR TRABAJO */
  editarTrabajo = (tid: string) => this.router.navigateByUrl('/editar/'+tid);

  /* ELIMINAR TRABAJOS */
  openDialog = ( tid: string ) =>{
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, { data: { uid: this.trabajo.uid, tid: tid }} );
  }

}
