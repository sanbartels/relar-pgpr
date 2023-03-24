import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';

/* COMPONENTS */
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProgramaComponent } from './pages/programa/programa.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { UserComponent } from './pages/user/user.component';
import { EditarComponent } from './pages/editar/editar.component';
import { PosterComponent } from './pages/poster/poster.component';
import { PosterhallComponent } from './pages/posterhall/posterhall.component';
import { AperturaComponent } from './pages/apertura/apertura.component';
import { ClausuraComponent } from './pages/clausura/clausura.component';
import { VideosComponent } from './pages/videos/videos.component';

/*PAGO*/
import { RegistrarseComponent } from './pages/pago/pago-1/registrarse.component';
import { PagoComponent } from './pages/pago/pago-2/pago.component';
import { PostularTrabajoComponent } from './pages/pago/pago-3/postular-trabajo.component';
import { Pago2Component } from './pages/pago/pago-4/pago2.component';
import { Pago3Component } from './pages/pago/pago-5/pago3.component';
//import { PostularTrabajo2Component } from './pages/postular-trabajo2/postular-trabajo2.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'editar/:tid', component: EditarComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'programa', component: ProgramaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'apertura', component: AperturaComponent },
  { path: 'clausura', component: ClausuraComponent },
  { path: 'videos', component: VideosComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'posterhall', component: PosterhallComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'poster/:uid/:tid', component: PosterComponent, ...canActivate(redirectUnauthorizedToLogin) },
  /*MODULES*/
  { path: 'sesiones-de-trabajo/:id', loadChildren: () => import('./pages/sesion-de-trabajo/sesion.module').then(m => m.SesionModule) },
  { path: "mesas-redondas/:id", loadChildren: () => import('./pages/mesas-redondas/mesas.module').then(m => m.MesasModule) },
  /*ADMIN*/
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule), ...canActivate(redirectUnauthorizedToLogin) },
  /*PAGO*/
  { path: 'registrarse-1', component: RegistrarseComponent },
  { path: 'registrarse-2', component: PagoComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'registrarse-3', component: PostularTrabajoComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'registrarse-4', component: Pago2Component, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'registrarse-5', component: Pago3Component, ...canActivate(redirectUnauthorizedToLogin) },
  //{ path: 'postular-trabajo', component: PostularTrabajo2Component, ...canActivate(redirectUnauthorizedToLogin) },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
