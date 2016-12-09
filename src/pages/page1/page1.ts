import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1_1 } from '../page1/page1-1';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  nextPage(){
  	this.navCtrl.push(Page1_1);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
