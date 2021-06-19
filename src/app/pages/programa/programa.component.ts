import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {

  constructor() { }

  day="0";

  dayFunction = (value: string) => {
    this.day = value;
  }

  ngOnInit(): void {
  }

}
