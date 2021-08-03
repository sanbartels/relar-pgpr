import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SesionDeTrabajoComponent } from './sesion-de-trabajo.component'
import { CongresistaComponent } from './pages/congresista.component'
import { InicioSesionComponent } from './pages/inicio.component';
import { PosterTalkComponent } from './pages/poster-talk.component';
import { DialogosComponent } from './pages/dialogos.component';

const routes: Routes = [

  { path: '', component: SesionDeTrabajoComponent,
    children: [
        { path: '', component: InicioSesionComponent },
        { path: 'charlas-magistrales/:cid', component: CongresistaComponent },
        { path: 'poster-talk', component: PosterTalkComponent },
        { path: 'dialogos-de-investigacion', component: DialogosComponent },
        { path: '**', pathMatch: 'full', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesionRoutingModule {}