import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController,
    public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({

      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async ingresar(){

    var formul = this.formularioLogin.value;
    var nom = JSON.parse(localStorage.getItem('nom')|| "[]");

    if(nom.usuario == formul.usuario && nom.password == formul.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('home')
    }
    else{
      const alert = await this.alertController.create({
        header: 'Aviso!',
        subHeader: 'Datos Incorrectos',
        message: 'Los datos que ingresaste son incorrectos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      
    }
    
  }

}
