import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Calculation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calculation2',
  templateUrl: 'calculation2.html'
})
export class CalculationPage2 {

  pulleyCenter1:number;
  pulleyCenter2:number;
  pulleyCenter3:number;

  largeDiameter: number;
  mediumDiameter: number;
  smallDiameter: number;

  beltLength: number;

  measuringUnits: string;
  public recal:any;
  showCalculate:boolean;

  constructor(public navCtrl: NavController,private storage:Storage,public params: NavParams) {
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

    this.pulleyCenter1 = 0;
    this.pulleyCenter2 = 0;
    this.pulleyCenter3 = 0;

    this.largeDiameter = 0;
    this.mediumDiameter = 0;
    this.smallDiameter = 0;
  }

  pulleyCenterChange1(value){
    this.pulleyCenter1 = value;

    if (!this.showCalculate) {
        this.calculateResult();
    }
  }

  pulleyCenterChange2(value){
    this.pulleyCenter2 = value;

    if (!this.showCalculate) {
        this.calculateResult();
    }
  }

  pulleyCenterChange3(value){
    this.pulleyCenter3 = value;

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

  mediumDiameterChange(value){
    this.mediumDiameter = value;

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

    if(sumTotalCenter > 0){
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
    }else{
    	this.beltLength =  0;
    }
  }

}
