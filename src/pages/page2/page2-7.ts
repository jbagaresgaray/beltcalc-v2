import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page2-7',
  templateUrl: 'page2-7.html'
})
export class Page2_7 {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    console.log('Page2-7');
  }

  nextPage(){
  	// this.navCtrl.push();
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
