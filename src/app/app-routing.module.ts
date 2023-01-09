import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamadaPage } from './pages/camada/camada';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'camada',
    pathMatch: 'full',
  },
  {
    path: 'camada',
    component: CamadaPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
