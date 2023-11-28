import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClienteDetailPageRoutingModule } from './cliente-detail-routing.module';
import { ClienteDetailPage } from './cliente-detail.page';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteDetailPageRoutingModule
  ],
  declarations: [ClienteDetailPage],
  providers: [
    {
      provide: ActivatedRoute,
      useValue: {
        snapshot: {
          paramMap: {
            get: (key: string) => '1', // Ajusta según sea necesario
          },
        },
      },
    },
  ],
})
export class ClienteDetailPageModule {}