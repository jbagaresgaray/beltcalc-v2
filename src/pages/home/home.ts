import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SettingsPage } from '../settings/settings';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { CalculationPage1 } from '../calculation/calculation';
import { CalculationPage2 } from '../calculation/calculation2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public navTitle:any;
  
  constructor(public navCtrl: NavController,private storage:Storage) {
  	this.navTitle = '<img class="title-image" src="assets/images/vbeltcalc-logo.png" style="height:35px;">';
  }

  openSettings(){
	  this.navCtrl.push(SettingsPage);
  }

  gotoTwoPulleys(){
    this.storage.get('isResult').then((value) => {
        if(value == 'result'){
          this.navCtrl.push(CalculationPage1,{
            recal:false
          });
        }else{
          this.navCtrl.push(Page1);
        }
    });
  }

  gotoThreePulleys(){
    this.storage.get('isResult').then((value) => {
        if(value == 'result'){
          this.navCtrl.push(CalculationPage2,{
            recal:false
          });
        }else{
          this.navCtrl.push(Page2);
        }
    });
  }
}
