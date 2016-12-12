import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-page1-4',
  templateUrl: 'page1-4.html'
})
export class Page1_4 {

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
  	
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
