import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1_3 } from '../page1/page1-3';

@Component({
  selector: 'page-page1-2',
  templateUrl: 'page1-2.html'
})
export class Page1_2 {

  constructor(public navCtrl: NavController) {
    
  }

  nextPage(){
  	this.navCtrl.push(Page1_3);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
