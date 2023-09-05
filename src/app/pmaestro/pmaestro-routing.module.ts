import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmaestroPage } from './pmaestro.page';

const routes: Routes = [
  {
    path: '',
    component: PmaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmaestroPageRoutingModule {}
