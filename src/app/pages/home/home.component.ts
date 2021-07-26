import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../components/dialogs/pop-up-home.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private auth: AuthService
  ) {
    this.openDialog();
  }

  ngOnInit(): void {}

  openDialog = () =>{
    if(this.auth.popup){
      const dialogRef = this.dialog.open(PopUpComponent);
      this.auth.popup = false;
    }
  }

}
