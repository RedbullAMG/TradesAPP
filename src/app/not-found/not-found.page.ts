import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement>; 

  private animation: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.animation.play();
    }, 100);
  }
  ionViewWillLeave() {
    if (this.animation) {
      this.animation.stop();
    }}

    play() {
      this.animation.play();
    }
  
    
  
    stop() {
      this.animation.stop();
    }

  

  ngOnInit() {

    
  }



  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');

      
  }

  



  

}
