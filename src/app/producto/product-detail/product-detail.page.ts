import { Component, OnInit } from '@angular/core';

// Import a utilizar 
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { ClProducto } from '../model/ClProducto';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  // Creamos registro a utilizar en el Html
  producto: ClProducto = {
    idProducto: 0,
    codigo: "09-G09",
    nombreprod: "0",
    precio: 0,
    cantidad: 0,
    fechaNacimiento: new Date(),
    rut: 0,
    dv: "0",
    enfermedad: "0",
    fonocontacto: 0,
    categoria: "0",
    editorial: "0",
    raza: "0",
    edad: 0,
    altura: 0,
    hrini: "0",
    hrfin: "0",
    direccion: "0",
    fCreacion: new Date()
  };

  // Injectamos Librerías a utilizar
  constructor(
    public restApi: ProductServiceService
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public route: ActivatedRoute
    , public router: Router
  ) { }

  // En el OnInit, ejecutamos la lectura
  ngOnInit() {
    this.getProduct();
  }

// Método que permite leer el producto
  async getProduct() {
    console.log("getProduct **************** ParamMap ID:" + this.route.snapshot.params['idProducto']);
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getProduct(+this.route.snapshot.params['idProducto'])
      .subscribe({
        next: (res) => {
          console.log("Data *****************");
          console.log(res);
          // Si funciona la respuesta la pasamos al producto
          this.producto = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          //Si no funcion desplegamos en consola el error
          console.log("Error DetailProduct Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }

  // El Html invoca el método delete
  async delete(idProducto: number) {
    // Confirma Primero
    this.presentAlertConfirm(idProducto, 'Confirme la Eliminación, De lo cantrario Cancele');
  }
  // Creamos una rutina para confirmar la eliminación
  async presentAlertConfirm(idProducto: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!', // Título
      message: msg,   // Mensaje
      buttons: [   // Botones
        {
          text: 'Eliminar : ' + idProducto + " OK",
          handler: () => { // Si presiona ejecuta esto
            //this.router.navigate(['']);
            this.deleteConfirmado(idProducto)
          }
        }
      ]
    });
    // Presenta en pantalla
    await alert.present();
  }

  // Es invocado desde el Alert
  async deleteConfirmado(idProducto: number) {
    alert("Eliminando " + idProducto)
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.deleteProduct(idProducto)
      .subscribe({
        next: (res) => {
          console.log("Error DetailProduct Página", res);
          loading.dismiss();
          this.router.navigate(['/product-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error DetailProduct Página", err);
          loading.dismiss(); //Elimina la espera
        }

      })
  }
}
