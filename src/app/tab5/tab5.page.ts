import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor() {}

  @ViewChild(IonSlides) slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }

  swipeBack(){
    this.slides.slidePrev();
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

}
