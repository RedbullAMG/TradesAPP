import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PmaestroPageRoutingModule } from './pmaestro-routing.module';

import { PmaestroPage } from './pmaestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PmaestroPageRoutingModule
  ],
  declarations: [PmaestroPage]
})
export class PmaestroPageModule {}
