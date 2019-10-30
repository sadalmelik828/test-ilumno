import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

import { RegistroService } from './services/registro.service';
import { NoticiasService } from './services/noticias.service';
import { ProgramasService } from './services/programas.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    RegistroFormComponent,
    NoticiasComponent,
    RegistroFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RegistroService,
    NoticiasService,
    ProgramasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
