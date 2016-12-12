import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1_4 } from '../page1/page1-4';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page1-3',
  templateUrl: 'page1-3.html'
})
export class Page1_3 {

  measuringUnits: string;
  
  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');

    this.storage.get('isMeasure').then((value) => {
      this.measuringUnits = value;
    });
  }

  nextPage(){
    this.navCtrl.push(Page1_4);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
