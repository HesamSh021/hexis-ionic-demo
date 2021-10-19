import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    this.currentIndex = 0;
   }

  currentIndex: number;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  slideTo(slide, index: number) {
    slide.slideTo(index);
    this.currentIndex = index;
  }

  @ViewChild(IonSlides) slides: IonSlides;
  
  setIndex() {
    this.slides.getActiveIndex().then(index => {     
      this.currentIndex = index;
    });
  }

}
