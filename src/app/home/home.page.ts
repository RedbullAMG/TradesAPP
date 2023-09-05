import { Component, NgModule } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular'; // Importa AlertController y NavController


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData = {
    username: '',
  };
  
  userRatings: any[] = [];
  disponible = false;
  comunas: string[] = [];
  nuevaComuna: string = '';
  trabajosPendientes = [
    { nombre: 'Instalacion de calefont', fecha: '10/09/2023' },
    { nombre: 'Mantencion de calefont', fecha: '15/09/2023' },
  
  ];

  constructor(
    private alertController: AlertController, 
    private navCtrl: NavController 
  ) {}

  cambiarDisponibilidad() {
    
  }

  editarComuna(index: number) {
    const comunaEditada = prompt('Editar comuna', this.comunas[index]);
    if (comunaEditada !== null) {
      this.comunas[index] = comunaEditada;
    }
  }

  eliminarComuna(index: number) {
    this.comunas.splice(index, 1);
  }

  agregarComuna() {
    if (this.nuevaComuna.trim() !== '') {
      this.comunas.push(this.nuevaComuna);
      this.nuevaComuna = ''; 
    }
  }

  async salir(){

    

    const alert = await this.alertController.create({
      header: 'Salir',
      message: 'Estás seguro que quieres salir?',
      buttons: [
        {
          text: 'Mejor no',
          handler: () => {

          }
        }, {
          text: 'Si estoy seguro',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login')
          }
        }
      ]
    });

    await alert.present();
    
    
  }
}