import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';


import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { InfoPage } from '../pages/info/info';
import { CalculationPage1 } from '../pages/calculation/calculation';
import { CalculationPage2 } from '../pages/calculation/calculation2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  showFooter:boolean = false;

  constructor(public platform: Platform,private storage:Storage) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' },
      { title: 'Two Pulleys', component: Page1, icon:'arrow-forward' },
      { title: 'Three Pulleys',component: Page2, icon:'arrow-forward' },
      { title: 'Settings',component: SettingsPage, icon:'settings' },
      { title: 'About',component: AboutPage, icon:'information-circle' }
    ];

 }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.platform.registerBackButtonAction(function(event){
         let nav=this.app.getComponent('nav');
         if (nav.canGoBack()) {nav.pop();}
         else {this.confirmExitApp(nav);}
      },101);

      StatusBar.styleDefault();
      Splashscreen.hide();

      this.showFooter = true;
      this.storage.set('isResult', 'step');
      this.storage.set('isMeasure', 'standard');

      /*this.storage.get("isResult").then((value) => {
       console.log('Storage isResult: '+ value);
      });*/

      /*var settings:number = this.storage.get('isAgree');

      if (settings == 1) {
          // $state.go('app.tab');
      }*/

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title == 'Two Pulleys'){
      this.storage.get('isResult').then((value) => {
          if(value == 'result'){
            this.nav.setRoot(CalculationPage1);
          }else{
            this.nav.setRoot(page.component);
          }
      });
    }else if(page.title == 'Three Pulleys'){
       this.storage.get('isResult').then((value) => {
          if(value == 'result'){
            this.nav.setRoot(CalculationPage2);
          }else{
            this.nav.setRoot(page.component);
          }
      });
    }else{
      this.nav.setRoot(page.component);
    }
  }

}
