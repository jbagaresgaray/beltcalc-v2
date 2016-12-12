import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1_3 } from '../page1/page1-3';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page1-2',
  templateUrl: 'page1-2.html'
})
export class Page1_2 {

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
  	this.navCtrl.push(Page1_3);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
