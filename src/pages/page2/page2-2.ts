import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_3 } from '../page3/page2-3';

@Component({
  selector: 'page-page2-2',
  templateUrl: 'page2-2.html'
})
export class Page2_2 {

  constructor(public navCtrl: NavController) {
    
  }

  nextPage(){
  	this.navCtrl.push(Page2_3);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
