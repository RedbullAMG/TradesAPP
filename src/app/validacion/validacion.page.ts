import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage {

  photoData: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) { }

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
}

