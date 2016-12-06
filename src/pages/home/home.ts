import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public navTitle;

  constructor(public navCtrl: NavController) {
  	this.navTitle = '<img class="title-image" src="assets/images/vbeltcalc-logo.png" style="height:35px;">';
  }

  openSettings(){
	this.navCtrl.push(SettingsPage);
  }

}
