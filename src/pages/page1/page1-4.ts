import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-page1-4',
  templateUrl: 'page1-4.html'
})
export class Page1_4 {

  constructor(public navCtrl: NavController) {
    
  }

  nextPage(){
  	
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
