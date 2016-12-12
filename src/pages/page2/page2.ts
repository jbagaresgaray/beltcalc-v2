import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2_1 } from '../page2/page2-1';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

    this.storage.set('pulleyCenter1',0);
    this.storage.set('pulleyCenter2',0);
    this.storage.set('pulleyCenter3',0);

    this.storage.set('largeDiameter',0);
    this.storage.set('mediumDiameter',0);
    this.storage.set('smallDiameter',0);
    
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  nextPage(){
    this.navCtrl.push(Page2_1);
  }

  prevPage(){
    this.navCtrl.pop();
  }

}
