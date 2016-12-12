import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-page1-4',
  templateUrl: 'page1-4.html'
})
export class Page1_4 {

  pulleyCenter:number;
  largeDiameter: number;
  smallDiameter: number;

  beltLength: number;

  measuringUnits: string;

  constructor(public navCtrl: NavController,private storage:Storage) {
    
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

    this.calculateResult();
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');

    this.storage.get('isMeasure').then((value) => {
      this.measuringUnits = value;
    });

    this.storage.get('pulleyCenter').then((value) => {
      this.pulleyCenter = value;
    });

    this.storage.get('largeDiameter').then((value) => {
      this.largeDiameter = value;
    });

    this.storage.get('smallDiameter').then((value) => {
      this.smallDiameter = value;
    });
  }

  pulleyCenterChange(value){
    this.pulleyCenter = value;
  }

  largeDiameterChange(value){
    this.largeDiameter = value;
  }

  smallDiameterChange(value){
    this.smallDiameter = value;
  }

  calculateResult(){
  	let totalPulleyCenter: number = Number((this.pulleyCenter * 2).toFixed(4));
    let totalLargeDiameter: number = Number(((3.146 * this.largeDiameter) / 2).toFixed(4));
    let totalSmallDiameter: number = Number(((3.146 * this.smallDiameter) / 2).toFixed(4));

    console.log(':======================: ', this.measuringUnits);
    console.log('center: ', totalPulleyCenter);
    console.log('large: ', totalLargeDiameter);
    console.log('small: ', totalSmallDiameter);

    let sumTotal:number = (totalPulleyCenter + totalLargeDiameter + totalSmallDiameter);
    console.log('allTotal: ', sumTotal);

    if (this.measuringUnits == 'standard') {
        let total:number = Number((sumTotal - 0.125).toFixed(4));
        total = Number((total).toFixed(3));

        console.log('BeltLength 1: ', total);
        console.log(':======================:');
        this.beltLength =  total;
    } else {
        let total:number = Number((sumTotal - 0.3175).toFixed(4));
        total = Number((total).toFixed(3));

        console.log('BeltLength 2: ', total);
        console.log(':======================:');
        this.beltLength =  total;
    }
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
