import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_4 } from '../page2/page2-4';

@Component({
  selector: 'page-page2-3',
  templateUrl: 'page2-3.html'
})
export class Page2_3 {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    console.log('Page2-3');
  }

  nextPage(){
  	this.navCtrl.push(Page2_4);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
