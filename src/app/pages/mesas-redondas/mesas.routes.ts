import { Routes } from '@angular/router';
import { InicioMesaComponent } from './pages/inicio.component';

export const MESAS_ROUTES: Routes = [
  { path: '', component: InicioMesaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];