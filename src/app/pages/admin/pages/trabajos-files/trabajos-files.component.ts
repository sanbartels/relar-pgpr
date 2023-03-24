import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-trabajos-files',
  templateUrl: './trabajos-files.component.html',
  styleUrls: ['./trabajos-files.component.css']
})
export class TrabajosFilesComponent implements OnInit {

  constructor(
    public admin: AdminService,
  ) { }

  ngOnInit(): void {
  }

  openNewTab = (url: string) => window.open(url, '_blank');
  console = (txt: string) => console.log(txt);

}
