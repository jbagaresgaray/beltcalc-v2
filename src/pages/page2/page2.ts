import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_1 } from '../page2/page2-1';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad(){
    console.log('Page2');
  }

  nextPage(){
    this.navCtrl.push(Page2_1);
  }

  prevPage(){
    this.navCtrl.pop();
  }

}
