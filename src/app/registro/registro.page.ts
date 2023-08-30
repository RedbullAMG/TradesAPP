import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController,
    public navCtrl: NavController) { 
    this.formularioRegistro = this.fb.group({

      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl ("", Validators.required)

    });
  }

  ngOnInit() {
  }

  async guardar(){
    var formul = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      
      const alert = await this.alertController.create({
        header: 'Aviso!',
        subHeader: 'Presta Atención',
        message: 'Tienes que llenar todos los campos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
      
    }else{

      const alert = await this.alertController.create({
        
        message: 'Registrado!'
        
      });
      await alert.present();
    }

    

    var nom = {
      usuario: formul.usuario,
      password: formul.password
      
    }

    localStorage.setItem('nom',JSON.stringify(nom))

  }

}
