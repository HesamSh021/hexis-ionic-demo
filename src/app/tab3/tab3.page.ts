import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {
    this.segment = 'day';
  }

  segment: any;
  showMore: { [key: string]: boolean } = {};

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
