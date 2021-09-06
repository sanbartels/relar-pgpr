import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* MODULES */
import { AdminRoutingModule } from './admin.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material.module';

/* PAGES */
import { AdminComponent } from './admin.component';
import { InicioAdminComponent } from './pages/inicio/inicio.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { ConferencistaComponent } from './pages/conferencista/conferencista.component';
import { PanelistaComponent } from './pages/panelista/panelista.component';
import { ActualizarMesaComponent } from './pages/actualizar-mesa/actualizar-mesa.component';
import { ActualizarSesionComponent } from './pages/actualizar-sesion/actualizar-sesion.component';

/*SERVICES */
import { AdminService } from '../../services/admin.service';

@NgModule({
  declarations: [
    AdminComponent,
    InicioAdminComponent,
    UsuariosComponent,
    TrabajosComponent,
    ConferencistaComponent,
    PanelistaComponent,
    ActualizarMesaComponent,
    ActualizarSesionComponent,
    TrabajoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
