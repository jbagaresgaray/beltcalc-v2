import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { InfoPage } from '../pages/info/info';

import { localStorage } from '../providers/storage';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  showFooter:boolean = false;

  constructor(public platform: Platform,public localData: localStorage,private storage:Storage) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Two Pulleys', component: Page1 },
      { title: 'Three Pulleys',component: Page2 },
      { title: 'Settings',component: SettingsPage },
      { title: 'About',component: AboutPage }
    ];

    this.localData.getIsAgree().then((result)=> {
      console.log('result: ',result);
    });

 }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.showFooter = true;
      this.storage.set('isResult', 'step');
      this.storage.set('isMeasure', 'standard');

      /*var settings:number = this.storage.get('isAgree');

      if (settings == 1) {
          // $state.go('app.tab');
      }*/

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
