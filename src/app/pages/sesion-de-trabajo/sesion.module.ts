import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* MODULES */
import { SesionRoutingModule } from './sesion.routing.module';
import { MaterialModule } from '../../modules/material.module';

/* PAGES */
import { SesionDeTrabajoComponent } from './sesion-de-trabajo.component'
import { CongresistaComponent } from './pages/congresista.component'
import { InicioSesionComponent } from './pages/inicio.component';
import { PosterTalkComponent } from './pages/poster-talk.component';
import { DialogosComponent } from './pages/dialogos.component';

@NgModule({
  declarations: [
    SesionDeTrabajoComponent,
    CongresistaComponent,
    InicioSesionComponent,
    PosterTalkComponent,
    DialogosComponent
  ],
  imports: [
    CommonModule,
    SesionRoutingModule,
    MaterialModule
  ]
})
export class SesionModule { }