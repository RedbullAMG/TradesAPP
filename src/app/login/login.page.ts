import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import type { Animation } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController, AnimationController, IonCard, IonCardContent} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement>;
  
  private animation: Animation;

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController,
    public navCtrl: NavController, public animationCtrl: AnimationController) { 

    this.formularioLogin = this.fb.group({

      'email': new FormControl("",[Validators.required, Validators.email]),
      'password': new FormControl("",Validators.required)
    })

  

    

  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, width: '80px' },
        { offset: 0.72, width: 'var(--width)' },
        { offset: 1, width: '240px' },
      ]);
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }


  ngOnInit() {
  }

  async ingresar(){

    var formul = this.formularioLogin.value;
    var nom = JSON.parse(localStorage.getItem('nom')|| "[]");

    if(nom.email == formul.email && nom.password == formul.password){
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



