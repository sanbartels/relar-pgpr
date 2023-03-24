import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) {}
  
  day="0";

  dayFunction = (value: string) => {
    this.day = value;
  }

  ngOnInit(): void {
  }

}
