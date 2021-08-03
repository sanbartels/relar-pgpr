import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( 
    public auth: AuthService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
