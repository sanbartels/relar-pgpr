import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postular-trabajo2',
  templateUrl: './postular-trabajo2.component.html',
  styleUrls: ['./postular-trabajo2.component.css']
})
export class PostularTrabajo2Component {

  submitted = false;
  changeSubmitted = ( event ) => { this.submitted = event }
  volverAlHome(){ this.router.navigateByUrl('home') }


  constructor(
    private router: Router
  ) {}

}