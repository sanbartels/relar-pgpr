import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RELAR-PGPR';


  // Agregue el guion bajo al inicio de los idiomas por que Firebase maneja los mismos archivos
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['_es', '_en', '_pt']);
    this.translate.setDefaultLang('_es');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/es|en|pt/) ? '_' + browserLang : '_es');
  }
}
