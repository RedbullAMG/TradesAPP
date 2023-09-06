import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage {

  photoData: SafeResourceUrl | undefined;

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
      
    


}

