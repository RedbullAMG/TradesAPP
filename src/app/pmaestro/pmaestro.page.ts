import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pemaestro',
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
  

  constructor(private router: Router) { }

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
    }
  }


  eliminarOficio(index: number) {
    this.tiposOficio.splice(index, 1);
  }

  agregarTrabajoRecomendacion() {
    if (this.nuevoTrabajoRecomendacion.trim() !== '') {
      this.trabajosRecomendaciones.push(this.nuevoTrabajoRecomendacion);
      this.nuevoTrabajoRecomendacion = ''; 
    }
  }

  eliminarTrabajoRecomendacion(index: number) {
    this.trabajosRecomendaciones.splice(index, 1);
  }
  irAInicio() {
    this.router.navigate(['/home']);
  }
}