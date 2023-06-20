import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InicioComponent } from './structure/inicio/inicio.component';
import { AcerdeDeMiComponent } from './structure/acerde-de-mi/acerde-de-mi.component';
import { PortafolioComponent } from './structure/portafolio/portafolio.component';
import { ContactoComponent } from './structure/contacto/contacto.component';
import { NabvarComponent } from './structure/inicio/nabvar/nabvar.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcerdeDeMiComponent,
    PortafolioComponent,
    ContactoComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    OverlayPanelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
