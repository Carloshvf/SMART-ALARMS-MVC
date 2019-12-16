import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelCentralComponent } from '../app/painel-central/painel-central.component';

const routes: Routes = [
  { path: 'crisis-center', component: PainelCentralComponent },
  { path: '**', component: PainelCentralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
