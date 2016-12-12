import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1_1 } from '../page1/page1-1';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

    this.storage.set('smallDiameter',0);
    this.storage.set('largeDiameter',0);
    this.storage.set('pulleyCenter',0);
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  nextPage(){
  	this.navCtrl.push(Page1_1);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
