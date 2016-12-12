import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_7 } from '../page2/page2-7';

@Component({
  selector: 'page-page2-6',
  templateUrl: 'page2-6.html'
})
export class Page2_6 {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    console.log('Page2-6');
  }

  nextPage(){
  	this.navCtrl.push(Page2_7);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
