import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MesasRedondasComponent } from './mesas-redondas.component';
import { BioComponent } from './pages/bio.component';
import { InicioMesaComponent } from './pages/inicio.component';

const routes: Routes = [
  { path: '', component: MesasRedondasComponent,
    children: [
      { path: '', component: InicioMesaComponent },
      { path: ':bio', component: BioComponent },
      { path: '**', pathMatch: 'full', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRoutingModule {}