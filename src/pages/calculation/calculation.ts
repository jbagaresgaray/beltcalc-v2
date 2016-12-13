import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Calculation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calculation',
  templateUrl: 'calculation.html'
})
export class CalculationPage1 {

  pulleyCenter:number;
  largeDiameter: number;
  smallDiameter: number;

  beltLength: number;

  measuringUnits: string;
  public recal:any;
  showCalculate:boolean;

  constructor(public navCtrl: NavController ,private storage:Storage,public params: NavParams) {
    this.recal = params.get("recal");
    console.log('this.recal: ',this.recal);
    this.showCalculate = (this.recal == true) ? true : false;
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

    this.pulleyCenter = 0;
    this.largeDiameter = 0;
    this.smallDiameter = 0;
  }

  pulleyCenterChange(value){
    this.pulleyCenter = value;

    if (!this.showCalculate) {
        this.calculateResult();
    }
  }

  largeDiameterChange(value){
    this.largeDiameter = value;

    if (!this.showCalculate) {
        this.calculateResult();
    }
  }

  smallDiameterChange(value){
    this.smallDiameter = value;

    if (!this.showCalculate) {
        this.calculateResult();
    }
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

    if (sumTotal > 0){
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
    }else{
      this.beltLength =  0;
    }
  }

}
