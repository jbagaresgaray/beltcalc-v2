import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_4 } from '../page2/page2-4';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2-3',
  templateUrl: 'page2-3.html'
})
export class Page2_3 {

  pulleyCenter3: number = 0;
  measuringUnits: string;

  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

    this.storage.get('pulleyCenter3').then((value) => {
      this.pulleyCenter3 = value;
    });
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');

    this.storage.get('isMeasure').then((value) => {
      this.measuringUnits = value;
    });
  }

  pulleyCenterChange3(newValue){
    this.pulleyCenter3 = newValue;
  }

  nextPage(){
    this.storage.set('pulleyCenter3',this.pulleyCenter3);
  	this.navCtrl.push(Page2_4);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
