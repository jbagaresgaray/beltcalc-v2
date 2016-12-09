import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page2-4',
  templateUrl: 'page2-4.html'
})
export class Page2_4 {

  constructor(public navCtrl: NavController) {
    
  }

  nextPage(){
  	// this.navCtrl.push(Page1_2);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
