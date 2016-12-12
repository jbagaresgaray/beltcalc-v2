import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_3 } from '../page2/page2-3';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2-2',
  templateUrl: 'page2-2.html'
})
export class Page2_2 {

  pulleyCenter2: number = 0;
  measuringUnits: string;

  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

    this.storage.get('pulleyCenter2').then((value) => {
      this.pulleyCenter2 = value;
    });
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');

    this.storage.get('isMeasure').then((value) => {
      this.measuringUnits = value;
    });
  }

  pulleyCenterChange2(newValue){
    this.pulleyCenter2 = newValue;
  }

  nextPage(){
    this.storage.set('pulleyCenter2',this.pulleyCenter2);
  	this.navCtrl.push(Page2_3);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
