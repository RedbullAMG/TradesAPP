import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  photos: UserPhoto[] = [];

  constructor() {}

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const newPhoto: UserPhoto = {
      filepath: fileName,
      webviewPath: capturedPhoto.webPath,
    };

    this.photos.unshift(newPhoto); // Agregar al principio del array

    return newPhoto; // Si necesitas usar la foto inmediatamente
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
