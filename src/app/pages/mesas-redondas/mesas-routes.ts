import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro.component';

export const MESAS_ROUTES: Routes = [
  { path: '', component: IntroComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];