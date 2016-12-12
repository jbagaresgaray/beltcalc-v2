import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_5 } from '../page2/page2-5';

@Component({
  selector: 'page-page2-4',
  templateUrl: 'page2-4.html'
})
export class Page2_4 {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    console.log('Page2-4');
  }

  nextPage(){
  	this.navCtrl.push(Page2_5);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
