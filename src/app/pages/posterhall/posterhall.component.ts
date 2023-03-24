import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VariablesService } from '../../services/variables.service';
import { TrabajosService } from '../../services/trabajos.service';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-posterhall',
  templateUrl: './posterhall.component.html',
  styleUrls: ['./posterhall.component.css']
})
export class PosterhallComponent{

  posterhall: any[] = [];
  posterhallLoadded = false;
  limit = 9;

  constructor(
    public trabajos: TrabajosService,
    public router: Router,
    public _var: VariablesService
  ) {
    this.getPosterhall();
  }

  /* CARGA DE TRABAJOS*/
  getPosterhall = () =>{
    if(this.trabajos.trabajosLoadded){
      this.search();
      this.posterhallLoadded = true;
    }else{
      setTimeout(() => {
        this.getPosterhall();
      }, 2000);
    }
  }

  /* SEARCH */
  search = () =>{
    this.posterhall = this.trabajos.getPosterhall().filter(
      (trabajo) =>{
        let txt = this._var.currentSearch.toLowerCase();
        let tema = this._var.currentTema;
        return tema==0||tema.toString()==trabajo.tema?
        trabajo.titulo.toLowerCase().match(txt)? true :
        trabajo.expone.toLowerCase().match(txt)? true :
        trabajo.autores.toLowerCase().match(txt)? true :
        this.trabajos.temas[trabajo.tema].toLowerCase().match(txt)? true : false : false
      }
    )
  }
  filter = ( tema:number ) =>{
    if( tema == 0 ){ this.posterhall = this.trabajos.getPosterhall() }
    else{ this.posterhall = this.trabajos.getPosterhall().filter( value => value.tema == tema.toString() ) }
  }
  /*
    else{
      return newTrabajos.filter(trabajo =>{
        trabajo.titulo.match(this._var.currentSearch)? true :
        trabajo.expone.match(this._var.currentSearch)? true :
        trabajo.tema.match(this._var.currentSearch)? true :
        trabajo.autores.match(this._var.currentSearch)? true : false
      })
    }
  */

  /* SCROLL */
  scroll$: Subscription;
  ngOnInit() {
    this.scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      if((window.innerHeight+window.scrollY+500) >= document.documentElement.scrollHeight ){
        this.limit += 9;
      }
    });
  }
  ngOnDestroy() {
    this.scroll$.unsubscribe()
  }

  /* NAVEGACIÓN */
  irAlTrabajo = (uid:string, key:string) => 
    this.router.navigateByUrl('poster/'+uid+'/'+key);
}
