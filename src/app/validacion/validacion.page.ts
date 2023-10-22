import { Component,ViewChild,ElementRef } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  constructor(private sanitizer: DomSanitizer, public alertController: AlertController) { }

 

  async takePhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.photoData = this.sanitizer.bypassSecurityTrustResourceUrl(photo.webPath ?? '');
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

    async getCurrentPosition() {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current', coordinates);
      // Asignar el valor de la geolocalización al elemento HTML
      this.geolocationElement.nativeElement.innerHTML = `Tu posición actual es: ${coordinates.coords.latitude}, ${coordinates.coords.longitude}`;
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

