import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page2-7',
  templateUrl: 'page2-7.html'
})
export class Page2_7 {

  pulleyCenter1: number = 0;
  pulleyCenter2: number = 0;
  pulleyCenter3: number = 0;

  smallDiameter: number = 0;
  mediumDiameter: number = 0;
  largeDiameter: number = 0;

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

    this.storage.get('pulleyCenter1').then((value) => {
      this.pulleyCenter1 = value;
    });

    this.storage.get('pulleyCenter2').then((value) => {
      this.pulleyCenter2 = value;
    });

    this.storage.get('pulleyCenter3').then((value) => {
      this.pulleyCenter3 = value;
    });

    this.storage.get('smallDiameter').then((value) => {
      this.smallDiameter = value;
    });

    this.storage.get('mediumDiameter').then((value) => {
      this.mediumDiameter = value;
    });

    this.storage.get('largeDiameter').then((value) => {
      this.largeDiameter = value;
    });
  }

  pulleyCenterChange1(newValue) {
      this.pulleyCenter1 = newValue;
  }

  pulleyCenterChange2(newValue){
    this.pulleyCenter2 = newValue;
  }

  pulleyCenterChange3(newValue){
    this.pulleyCenter3 = newValue;
  }

  largeDiameterChange(value){
    this.largeDiameter = value;
  }

  mediumDiameterChange(newValue){
      this.mediumDiameter = newValue;
  }

  smallDiameterChange(value){
    this.smallDiameter = value;
  }


  calculateResult(){
    let totalPulleyCenter1: number = Number((this.pulleyCenter1 * 2).toFixed(4));
    let totalPulleyCenter2: number = Number((this.pulleyCenter2 * 2).toFixed(4));
    let totalPulleyCenter3: number = Number((this.pulleyCenter3 * 2).toFixed(4));

    let totalLargeDiameter: number = Number(((3.146 * this.largeDiameter) / 2).toFixed(4));
    let totalMediumDiameter: number = Number(((3.146 * this.mediumDiameter) / 2).toFixed(4));
    let totalSmallDiameter: number = Number(((3.146 * this.smallDiameter) / 2).toFixed(4));

    console.log(':======================: ', this.measuringUnits);
    console.log('center1: ', totalPulleyCenter1);
    console.log('center2: ', totalPulleyCenter2);
    console.log('center3: ', totalPulleyCenter3);
    console.log(':======================: ');
    console.log('large: ', totalLargeDiameter);
    console.log('medium: ', totalMediumDiameter);
    console.log('small: ', totalSmallDiameter);

    let sumTotalCenter:number = ((totalPulleyCenter1 + totalPulleyCenter2 + totalPulleyCenter3) + (totalLargeDiameter + totalMediumDiameter + totalSmallDiameter));
    console.log('sumTotalCenter: ', sumTotalCenter);
    console.log(':======================:');

    if (this.measuringUnits == 'standard') {
        let total:number = Number((sumTotalCenter - 0.125).toFixed(4));
        total = Number((total).toFixed(3));

        console.log('BeltLength 1: ', total);
        console.log(':======================:');
        this.beltLength =  total;
    } else {
        let total:number = Number((sumTotalCenter - 0.3175).toFixed(4));
        total = Number((total).toFixed(3));

        console.log('BeltLength 1: ', total);
        console.log(':======================:');
        this.beltLength =  total;
    }
  }

  prevPage(){
  	this.navCtrl.pop();
  }

}
