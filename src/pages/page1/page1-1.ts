import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1_2 } from '../page1/page1-2';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page1-1',
  templateUrl: 'page1-1.html'
})
export class Page1_1 {

  pulleyCenter: number = 0;
  smallDiameter: number = 0;
  largeDiameter: number = 0;
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


  pulleyCenterChange(value){

  }

  smallDiameterChange(value){

  }

  largeDiameterChange(value){

  }

  nextPage(){
  	this.navCtrl.push(Page1_2);
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
