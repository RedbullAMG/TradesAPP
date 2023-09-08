import { Component, NgModule, inject} from '@angular/core';
import { AlertController, NavController } from '@ionic/angular'; // Importa AlertController y NavController
import { Router } from '@angular/router';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {LiveAnnouncer} from '@angular/cdk/a11y';


export interface Comuna {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})

export class HomePage {
 

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  comunas: Comuna[] = [{name: 'Huechuraba'}, {name: 'Puente Alto'}, {name: 'El Monte'}];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    
    if (value) {
      this.comunas.push({name: value});
    }

    
    event.chipInput!.clear();
  }

  remove(comuna: Comuna): void {
    const index = this.comunas.indexOf(comuna);

    if (index >= 0) {
      this.comunas.splice(index, 1);

      this.announcer.announce(`Removed ${comuna}`);
    }
  }

  edit(comuna: Comuna, event: MatChipEditedEvent) {
    const value = event.value.trim();

    
    if (!value) {
      this.remove(comuna);
      return;
    }

    
    const index = this.comunas.indexOf(comuna);
    if (index >= 0) {
      this.comunas[index].name = value;
    }
  }


  userData = {
    username: '',
  };
  
  userRatings: any[] = [];
  disponible = false;
  trabajosPendientes = [
    { nombre: 'Instalacion de calefont', fecha: '10/09/2023' },
    { nombre: 'Mantencion de calefont', fecha: '15/09/2023' },
  
  ];

  constructor( private router: Router,
    private alertController: AlertController, 
    private navCtrl: NavController 
  ) {}


  ngOnInit() {

    //Aquí se hace la interpolación//
  
    const storedUserData = localStorage.getItem('nom');
    if (storedUserData) {
      const userDataObj = JSON.parse(storedUserData);
      this.userData.username = userDataObj.usuario; 
    }
  }

  //Código botón toggle

  cambiarDisponibilidad() {
    
  }
  
  async salir() {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Estás seguro de que quieres salir?',
      buttons: [
        {
          text: 'Mejor no',
          handler: () => {},
        },
        {
          text: 'Sí, estoy seguro',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          },
        },
      ],
    });
    await alert.present();
  }

  irPerfil() {
    this.router.navigate(['/pmaestro']);
  }

  
}




  
//ngOnInit() {
  // Recupera el nombre de usuario del almacenamiento local
  //const storedUserData = localStorage.getItem('nom');
  //if (storedUserData) {
    //const userDataObj = JSON.parse(storedUserData);
    //this.userData.username = userDataObj.username; // Actualiza el nombre de usuario en el objeto userData
  //}
//}



//userData = {
  //username: '',
//};
