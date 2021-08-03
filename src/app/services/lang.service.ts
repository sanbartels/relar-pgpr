import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

    lang: string;
    setLang = () => this.lang = this._lang.currentLang;

    constructor( private _lang: TranslateService ){
        this.setLang();
        this._lang.onLangChange.subscribe( () => this.setLang() )
    }
}