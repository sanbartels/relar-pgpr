import { Routes } from '@angular/router';
import { CongresistaComponent } from './pages/congresista.component'
import { IntroComponent } from './pages/intro.component';
import { PosterTalkComponent } from './pages/poster-talk.component';
import { DialogosComponent } from './pages/dialogos.component';

export const SESION_ROUTES: Routes = [
  { path: '', component: IntroComponent },
  { path: 'charlas-magistrales/:cid', component: CongresistaComponent },
  { path: 'poster-talk', component: PosterTalkComponent },
  { path: 'dialogos-de-investigacion', component: DialogosComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];