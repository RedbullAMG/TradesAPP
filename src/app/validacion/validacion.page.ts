import { Component,ViewChild,ElementRef } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PhotoService } from '../services/photo.service';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { Router } from '@angular/router';


const apiKey = 'AIzaSyDHUz9dZ3jFmn-goarRvUGNT6cTcLxlYEY';


@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage {
  photoData: SafeResourceUrl | undefined;
  imgValidacionSrc: string | undefined;
  usuario: any = {};
  @ViewChild('geolocation') geolocationElement: ElementRef;
  map: GoogleMap | undefined;
  constructor(
    private sanitizer: DomSanitizer,
    public alertController: AlertController,
    public photoService: PhotoService,
    private router: Router
  ) {}


  async takePhoto() {
    this.photoService.addNewToGallery();
  }
  
  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    if (this.photoService.photos.length > 0) {
      this.imgValidacionSrc = this.photoService.photos[0].webviewPath;
      this.usuario.img_perfil = this.imgValidacionSrc!;
    }
  }

  async mostrarMensajeEnviado() {
    const alert = await this.alertController.create({
      header: 'Enviado',
      message: 'Tu mensaje ha sido enviado, en 48 hrs se validará tu identidad.',
      buttons: [
       
        {
          text: 'Ir al home',
          handler: () => {
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();
  }


  sendEmail() {
    
  }

  async enviarImagen(){
    
  
      const alert = await this.alertController.create({
        header: 'ENVIADO!',
        
        message: 'Dentro de 48 horas nos contactaremos para activar tu cuenta',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
      
    }

    async obtenerPosicionActual() {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current position:', coordinates);
        // Haz algo con las coordenadas obtenidas, como mostrarlas en el componente
      } catch (error) {
        // Manejo de errores
        console.error('Error getting current position:', error);
      }
    }
      
    
    async initializeMap() {
      const coordinates = await Geolocation.getCurrentPosition();
      const mapRef = document.getElementById('map');
      if (mapRef) { // Comprueba si mapRef no es nulo
        const newMap = await GoogleMap.create({
          id: 'map',
          element: mapRef,
          apiKey: apiKey,
          config: {
            center: {
              lat: coordinates.coords.latitude,
              lng: coordinates.coords.longitude,
            },
            zoom: 18,
          },
        });
        this.map = newMap;
      } else {
        console.error('Elemento del mapa no encontrado en el DOM');
      }
    }
  
    ionViewDidEnter() {
      console.log('llamando');
      this.initializeMap();
    }
    

}

