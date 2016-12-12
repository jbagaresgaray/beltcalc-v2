import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_5 } from '../page2/page2-5';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2-4',
  templateUrl: 'page2-4.html'
})
export class Page2_4 {

  largeDiameter: number = 0;
  measuringUnits: string;

  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

    this.storage.get('largeDiameter').then((value) => {
      this.largeDiameter = value;
    });
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');

    this.storage.get('isMeasure').then((value) => {
      this.measuringUnits = value;
    });
  }

  largeDiameterChange(newValue){
    this.largeDiameter = newValue;
  }

  nextPage(){
    this.storage.set('largeDiameter',this.largeDiameter);
  	this.navCtrl.push(Page2_5);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
