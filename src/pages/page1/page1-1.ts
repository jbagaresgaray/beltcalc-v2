import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1_2 } from '../page1/page1-2';

@Component({
  selector: 'page-page1-1',
  templateUrl: 'page1-1.html'
})
export class Page1_1 {

  constructor(public navCtrl: NavController) {
    
  }

  nextPage(){
  	this.navCtrl.push(Page1_2);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
