import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public navTitle;
	public pushPage1;
	public pushPage2;


  constructor(public navCtrl: NavController) {
  	this.navTitle = '<img class="title-image" src="assets/images/vbeltcalc-logo.png" style="height:35px;">';
  	this.pushPage1 = Page1;
  	this.pushPage2 = Page2;
  }

  openSettings(){
	  this.navCtrl.push(SettingsPage);
  }
}
