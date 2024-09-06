import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { ListaPacienteComponent } from './components/lista-paciente/lista-paciente.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:'paciente',component:ListaPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
