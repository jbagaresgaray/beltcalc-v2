import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_6 } from '../page2/page2-6';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2-5',
  templateUrl: 'page2-5.html'
})
export class Page2_5 {

  mediumDiameter: number = 0;
  measuringUnits: string;

  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

    this.storage.get('mediumDiameter').then((value) => {
      this.mediumDiameter = value;
    });
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');

    this.storage.get('isMeasure').then((value) => {
      this.measuringUnits = value;
    });
  }

  mediumDiameterChange(newValue){
      this.mediumDiameter = newValue;
  }

  nextPage(){
    this.storage.set('mediumDiameter',this.mediumDiameter);
  	this.navCtrl.push(Page2_6);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
