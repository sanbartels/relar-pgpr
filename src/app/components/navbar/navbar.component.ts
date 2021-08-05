import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { TranslateService } from '@ngx-translate/core';
import { LayoutgService } from '../../services/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor( 
    public auth: AuthService,
    public data: DataService,
    private translate: TranslateService,
    public layout: LayoutgService
  ) {}

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
