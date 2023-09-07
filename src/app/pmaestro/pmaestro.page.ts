import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-pmaestro',
  templateUrl: './pmaestro.page.html',
  styleUrls: ['./pmaestro.page.scss'],
})
export class PmaestroPage implements OnInit {
  userImage: string | ArrayBuffer | null | undefined;
  @ViewChild('fileInput', { static: false }) fileInput: any;
  nombreDeUsuario = 'Nombre del Usuario';
  campoEditando: string | null = null;
  correoElectronico = 'correo@ejemplo.com';
  tiposOficio: string[] = [];
  nuevoOficio: string = '';
  zonaTrabajo: string = '';
  certificaciones: string = '';
  trabajosRecomendaciones: string[] = [];
  nuevoTrabajoRecomendacion: string = '';
  navCtrl: any;
  
  constructor(private router: Router, private storage: Storage) {
    this.initStorage();
  }
  async initStorage() {
    await this.storage.create(); 
    this.loadUserData();
  }

  ngOnInit() {
  
                  
                }
  selectImage() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.userImage = e.target?.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }
  editarCampo(campo: string) {
    this.campoEditando = campo;
  }


  cancelarEdicion() {
    this.campoEditando = null;
  }
 
  agregarOficio() {
    if (this.nuevoOficio.trim() !== '') {
      this.tiposOficio.push(this.nuevoOficio);
      this.nuevoOficio = ''; 
      this.storage.set('tiposOficio', this.tiposOficio);
      
    }
  }


  eliminarOficio(index: number) {
    this.tiposOficio.splice(index, 1);
    this.storage.set('tiposOficio', this.tiposOficio);
  }

  agregarTrabajoRecomendacion() {
    if (this.nuevoTrabajoRecomendacion.trim() !== '') {
      this.trabajosRecomendaciones.push(this.nuevoTrabajoRecomendacion);
      this.nuevoTrabajoRecomendacion = ''; 
      this.storage.set('trabajosRecomendaciones', this.trabajosRecomendaciones);
    }
  }

  eliminarTrabajoRecomendacion(index: number) {
    this.trabajosRecomendaciones.splice(index, 1);
    this.storage.set('trabajosRecomendaciones', this.trabajosRecomendaciones);
  }
  async loadUserData() {
    this.nombreDeUsuario = (await this.storage.get('nombreDeUsuario')) || 'Nombre del Usuario';
    this.correoElectronico = (await this.storage.get('correoElectronico')) || 'correo@ejemplo.com';
    this.zonaTrabajo = (await this.storage.get('zonaTrabajo')) || '';
    this.certificaciones = (await this.storage.get('certificaciones')) || '';
    this.tiposOficio = (await this.storage.get('tiposOficio')) || [];
    this.trabajosRecomendaciones = (await this.storage.get('trabajosRecomendaciones')) || [];
  }
  irAInicio() {
    this.router.navigate(['/home']);
  }
  
}