import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_2 } from '../page2/page2-2';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2-1',
  templateUrl: 'page2-1.html'
})
export class Page2_1 {

  pulleyCenter1: number = 0;
  measuringUnits: string;

  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

    this.storage.get('pulleyCenter1').then((value) => {
      this.pulleyCenter1 = value;
    });
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');

    this.storage.get('isMeasure').then((value) => {
      this.measuringUnits = value;
    });
  }

  pulleyCenterChange1(newValue) {
      this.pulleyCenter1 = newValue;
  }

  nextPage(){
    this.storage.set('pulleyCenter1',this.pulleyCenter1);
  	this.navCtrl.push(Page2_2);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
