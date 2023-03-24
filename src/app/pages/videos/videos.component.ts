import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { StorageService } from '../../services/storage.service';
import { LangService } from '../../services/lang.service';
import { VideoComponent } from '../../components/dialogs/video.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  conferencistas=[ 
    'jeroen-wagemans', 
    'alexandra-stoll',
    'euan-james',
    'agustin-grimoldi', 
    'massimiliano-cardinale', 
    'laila-pamela-martinez', 
    'pablo-hardoim', 
    'emanuel-de-souza', 
    'marina-sanchez', 
    'alda-rodriguez',
    'maria-caridad-napoles',
    'paula-aguilera',
    'romina-almesia',
    'jerri-zilli'
   ];

  constructor( 
    public data: DataService,
    public storage: StorageService,
    public lang: LangService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openVideo( cid:string ){
    this.storage.getDownloadURL(`videos/${cid}.mp4`).subscribe(
      mp4 =>{
        const dialogRef = this.dialog.open(VideoComponent, { data: { mp4 }} );
      }
    )
  }

}
