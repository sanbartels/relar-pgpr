import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  template: `
  <div>
    <img style="max-width: 100%; width: 450px;" src="/assets/img/pop-up.png" alt="Nuevas fechas de inscripciones">
  </div>
  `
})
export class PopUpComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}