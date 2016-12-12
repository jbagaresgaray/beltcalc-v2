import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_6 } from '../page2/page2-6';

@Component({
  selector: 'page-page2-5',
  templateUrl: 'page2-5.html'
})
export class Page2_5 {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    console.log('Page2-5');
  }

  nextPage(){
  	this.navCtrl.push(Page2_6);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
