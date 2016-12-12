import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_7 } from '../page2/page2-7';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2-6',
  templateUrl: 'page2-6.html'
})
export class Page2_6 {

  smallDiameter: number = 0;
  measuringUnits: string;

  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

    this.storage.get('smallDiameter').then((value) => {
      this.smallDiameter = value;
    });
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');

    this.storage.get('isMeasure').then((value) => {
      this.measuringUnits = value;
    });
  }

  smallDiameterChange(newValue){
    this.smallDiameter = newValue;
  }

  nextPage(){
    this.storage.set('smallDiameter',this.smallDiameter);
  	this.navCtrl.push(Page2_7);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
