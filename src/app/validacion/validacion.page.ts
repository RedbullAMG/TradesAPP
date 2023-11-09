import { Component,ViewChild,ElementRef } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PhotoService } from '../services/photo.service';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';



const apiKey = 'AIzaSyDHUz9dZ3jFmn-goarRvUGNT6cTcLxlYEY';


@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage {
  

  photoData: SafeResourceUrl | undefined;
  @ViewChild('geolocation') geolocationElement: ElementRef;
  map: GoogleMap | undefined;
  constructor(private sanitizer: DomSanitizer, public alertController: AlertController, public photoService: PhotoService) { }



  async takePhoto() {
    this.photoService.addNewToGallery();
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
      const mapRef = document.getElementById('map');
      if (mapRef) { // Comprueba si mapRef no es nulo
        const newMap = await GoogleMap.create({
          id: 'map',
          element: mapRef,
          apiKey: apiKey,
          config: {
            center: {
              lat: 33.6,
              lng: -117.9,
            },
            zoom: 8,
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

