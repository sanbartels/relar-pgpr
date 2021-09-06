import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component'
import { InicioAdminComponent } from './pages/inicio/inicio.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { ConferencistaComponent } from './pages/conferencista/conferencista.component';
import { PanelistaComponent } from './pages/panelista/panelista.component';
import { ActualizarSesionComponent } from './pages/actualizar-sesion/actualizar-sesion.component';
import { ActualizarMesaComponent } from './pages/actualizar-mesa/actualizar-mesa.component';

const routes: Routes = [

  { path: '', component: AdminComponent,
    children: [
      { path: '', component: InicioAdminComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'trabajo/:tid', component: TrabajoComponent },
      { path: 'trabajos', component: TrabajosComponent },
      { path: 'conferencista', component: ConferencistaComponent },
      { path: 'panelista', component: PanelistaComponent },
      { path: 'actualizar-sesion-de-trabajo', component: ActualizarSesionComponent },
      { path: 'actualizar-mesa-redonda', component: ActualizarMesaComponent },
      { path: '**', pathMatch: 'full', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
