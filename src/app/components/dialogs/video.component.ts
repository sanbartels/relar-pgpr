import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation',
  template: `
    <video controls autoplay class="w-100">
        <source [src]="data.mp4" type="video/mp4" sizes="480">
    </video>
  `
})
export class VideoComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}