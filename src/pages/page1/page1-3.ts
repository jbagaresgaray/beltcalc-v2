import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1_4 } from '../page1/page1-4';

@Component({
  selector: 'page-page1-3',
  templateUrl: 'page1-3.html'
})
export class Page1_3 {

  constructor(public navCtrl: NavController) {
    
  }

  nextPage(){
    this.navCtrl.push(Page1_4);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
