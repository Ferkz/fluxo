import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardBuscaComponent } from 'src/app/components/card-busca/card-busca.component';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { CriarSetorComponent } from 'src/app/components/criar-setor/criar-setor.component';
import { ListaPacienteComponent } from 'src/app/components/lista-paciente/lista-paciente.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';

import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    HomeComponent,
    CardComponent,
    CardBuscaComponent,
    CriarSetorComponent,
    AddComponent,
    ListaPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
