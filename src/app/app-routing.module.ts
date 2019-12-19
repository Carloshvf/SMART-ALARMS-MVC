import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelCentralComponent } from '../app/painel-central/painel-central.component';
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from '../app/detalhes/detalhes.component';

const routes: Routes = [
  { path: 'painel-central', component: PainelCentralComponent },
  { path: 'detalhes', component: DetalhesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
