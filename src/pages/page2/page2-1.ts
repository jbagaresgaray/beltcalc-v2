import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_2 } from '../page2/page2-2';

@Component({
  selector: 'page-page2-1',
  templateUrl: 'page2-1.html'
})
export class Page2_1 {

  constructor(public navCtrl: NavController) {
    
  }

  nextPage(){
  	this.navCtrl.push(Page2_2);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
