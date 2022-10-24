import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { PadreComponent } from './components/padre/padre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { CabeceraLetraDirective } from './directives/cabecera-letra.directive';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    ContenidoComponent,
    FormularioComponent,
    TablaComponent,
    PadreComponent,
    NombreApellidoPipe,
    CabeceraLetraDirective,
    AltaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
