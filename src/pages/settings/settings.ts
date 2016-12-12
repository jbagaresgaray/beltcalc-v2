import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  units: Array<{text: string, value: string}>;
  activeUnit: any;
  toggleModel: any;

  constructor(public navCtrl: NavController,private storage:Storage) {

  	this.units = [
      { text: 'Metric Units', value:'metric' },
      { text: 'Standard Units', value:'standard' }
    ];

    this.storage.get("isResult").then((value) => {
  	   console.log('Storage isResult: '+ value);
  	   this.toggleModel =  (value == 'step') ? true : false;
   	});

   	this.storage.get("isMeasure").then((value) => {
  	   console.log('Storage isMeasure: '+ value);
  	   this.activeUnit =  value;
   	});
  }  


  toggleOption(value){
  	 this.toggleModel = value;

  	 var isResult = (value == true) ? 'step' : 'result';
     this.storage.set('isResult', isResult);
  }

  serverSideChange2(value){
  	this.activeUnit = value;
  	this.storage.set("isMeasure", value);
  }
}
