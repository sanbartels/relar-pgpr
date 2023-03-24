import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';

import { SesionDeTrabajoComponent } from './sesion-de-trabajo.component'
import { CongresistaComponent } from './pages/congresista.component'
import { InicioSesionComponent } from './pages/inicio.component';
import { PosterTalkComponent } from './pages/poster-talk.component';
import { DialogosComponent } from './pages/dialogos.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', component: SesionDeTrabajoComponent,
    children: [
        { path: '', component: InicioSesionComponent },
        { path: 'charlas-magistrales/:cid', component: CongresistaComponent },
        { path: 'poster-talk', component: PosterTalkComponent, ...canActivate(redirectUnauthorizedToLogin) },
        { path: 'dialogos-de-investigacion', component: DialogosComponent, ...canActivate(redirectUnauthorizedToLogin) },
        { path: '**', pathMatch: 'full', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesionRoutingModule {}