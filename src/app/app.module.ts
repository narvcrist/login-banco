import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PublicarOfertaComponent } from './components/publicar-oferta/publicar-oferta.component';
import { MisOfertasComponent } from './components/mis-ofertas/mis-ofertas.component';
import { BuscarOfertasComponent } from './components/buscar-ofertas/buscar-ofertas.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    PublicarOfertaComponent,
    MisOfertasComponent,
    BuscarOfertasComponent,
    SidebarComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
