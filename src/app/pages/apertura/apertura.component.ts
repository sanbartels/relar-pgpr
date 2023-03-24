import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-apertura',
  templateUrl: './apertura.component.html',
  styleUrls: ['./apertura.component.css']
})
export class AperturaComponent implements OnInit {

  url: string;

  constructor(
    public auth: AuthService,
    private storage: StorageService,
    public snackBar: MatSnackBar
  ) {
    this.storage.getDownloadURL(`videos/apertura.mp4`).subscribe(
      resp => this.url = resp,
      error => this.snackBar.open('Video no disponible', 'Aceptar', { duration: 3000 })
    )
  }

  ngOnInit(): void {
  }

}
