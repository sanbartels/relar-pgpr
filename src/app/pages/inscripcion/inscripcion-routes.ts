import { Routes } from '@angular/router';
import { RegistrarseComponent } from '../inscripcion/pages/pago-1/registrarse.component';

export const INSCRIPCION_ROUTES: Routes = [
  { path: '', component: RegistrarseComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];