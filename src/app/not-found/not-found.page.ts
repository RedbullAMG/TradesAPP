import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage{
 /*  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement>;
  private animation: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    // No configurar la animación aquí, muévela a ngAfterViewInit
  }

  ngAfterViewInit() {
    // En ngAfterViewInit, la vista está completamente cargada, ahora puedes configurar la animación
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');

    // Puedes iniciar la animación aquí si es necesario
    setTimeout(() => {
      this.animation.play();
    }, 100);
  }

  ionViewDidEnter() {
    // Asegúrate de que this.animation esté definido antes de intentar reproducir la animación
    if (this.animation) {
      setTimeout(() => {
        this.animation.play();
      }, 100);
    }
  }

  ionViewWillLeave() {
    if (this.animation) {
      this.animation.stop();
    }
  }

  play() {
    this.animation.play();
  }

  stop() {
    this.animation.stop();
  } */
}
