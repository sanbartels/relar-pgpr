import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){
    router.events.forEach(
      ()=> this.show = this.router.isActive('sesiones-de-trabajo', false)
    )
  }

  ngOnInit(): void {
  }

}
