import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* MODULES */
import { MaterialModule } from '../../modules/material.module';
import { MesasRoutingModule } from './mesas.routing.module';

/* PAGES */
import { MesasRedondasComponent } from './mesas-redondas.component';
import { BioComponent } from './pages/bio.component';
import { InicioMesaComponent } from './pages/inicio.component';

@NgModule({
  declarations: [
    MesasRedondasComponent,
    InicioMesaComponent,
    BioComponent
  ],
  imports: [
    CommonModule,
    MesasRoutingModule,
    MaterialModule
  ]
})
export class MesasModule { }