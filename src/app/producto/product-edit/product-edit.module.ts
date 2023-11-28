import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Agrega esta línea

import { ProductEditPageRoutingModule } from './product-edit-routing.module';
import { ProductEditPage } from './product-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductEditPageRoutingModule,
    ReactiveFormsModule,
    RouterModule  // Agrega este módulo
  ],
  declarations: [ProductEditPage]
})
export class ProductEditPageModule {}
