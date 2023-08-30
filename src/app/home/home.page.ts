import { Component } from '@angular/core';
import { NavController, AlertController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData = {
    username: '',
    nombre: '',
    apellido: '',
    nivelEducacion: '',
    fechaNacimiento: '',
  };

  formData = {
    nombre: '',
    correo: '',
  };

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    private pickerCtrl: PickerController // Agrega PickerController en el constructor
  ) {}

  limpiarCampos() {
    this.userData.nombre = '';
    this.userData.apellido = '';
    this.userData.nivelEducacion = '';
    this.userData.fechaNacimiento = '';
  }

  async mostrarInformacion() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${this.userData.nombre} Apellido: ${this.userData.apellido}`,
      buttons: ['Cerrar'],
    });
  
    await alert.present();
  }

  submitForm() {
    console.log('Formulario enviado:', this.formData);
  }

  fechaNacimientoChanged(event: any) {
    console.log('Fecha de Nacimiento seleccionada:', event.detail.value);
  }
  async abrirCalendario() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'year',
          options: this.generateDateOptions('year'),
        },
        {
          name: 'month',
          options: this.generateDateOptions('month'),
        },
        {
          name: 'day',
          options: this.generateDateOptions('day'),
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: (value) => {
            const selectedDate = `${value.year.text}-${value.month.text}-${value.day.text}`;
            this.userData.fechaNacimiento = selectedDate;
          },
        },
      ],
    });
  
    await picker.present();
  }
  
  private generateDateOptions(type: 'year' | 'month' | 'day') {
    const options = [];
    const currentYear = new Date().getFullYear();
    
    if (type === 'year') {
      for (let year = currentYear - 70; year <= currentYear; year++) {
        options.push({
          text: year.toString(),
          value: year,
        });
      }
    } else if (type === 'month') {
      for (let month = 1; month <= 12; month++) {
        options.push({
          text: month.toString(),
          value: month,
        });
      }
    } else if (type === 'day') {
      for (let day = 1; day <= 31; day++) {
        options.push({
          text: day.toString(),
          value: day,
        });
      }
    }
  
    return options;
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