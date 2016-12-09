import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page1_1 } from '../pages/page1/page1-1';
import { Page1_2 } from '../pages/page1/page1-2';
import { Page1_3 } from '../pages/page1/page1-3';
import { Page1_4 } from '../pages/page1/page1-4';
import { Page2 } from '../pages/page2/page2';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { InfoPage } from '../pages/info/info';

import { Storage } from '@ionic/storage';
import { localStorage } from '../providers/storage';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page1_1,
    Page1_2,
    Page1_3,
    Page1_4,
    Page2,
    AboutPage,
    HomePage,
    SettingsPage,
    InfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      backButtonText:''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page1_1,
    Page1_2,
    Page1_3,
    Page1_4,
    Page2,
    AboutPage,
    HomePage,
    SettingsPage,
    InfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage,localStorage]
})
export class AppModule {}
