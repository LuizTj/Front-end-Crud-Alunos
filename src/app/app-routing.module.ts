import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { UsuarioComponent } from './page/usuario/usuario.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch: 'full'},
  {path:"usuario", component:UsuarioComponent}

];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
