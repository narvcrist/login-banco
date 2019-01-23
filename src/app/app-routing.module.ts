import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarOfertasComponent } from './components/buscar-ofertas/buscar-ofertas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PublicarOfertaComponent } from './components/publicar-oferta/publicar-oferta.component';
import { MisOfertasComponent } from './components/mis-ofertas/mis-ofertas.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'publicar-oferta', component: PublicarOfertaComponent},
  { path: 'mis-ofertas', component: MisOfertasComponent},
  { path: 'buscar-ofertas', component:BuscarOfertasComponent},
  { path: 'sidebar', component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
