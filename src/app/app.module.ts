import { LostsPage } from './../pages/losts/losts';
import { PremiPage } from './../pages/premi/premi';
import { ResultPage } from './../pages/result/result';
import { RisikoPage } from './../pages/risiko/risiko';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        RisikoPage,
        ResultPage,
        LostsPage,
        PremiPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDx8x2n_i8KNBwl0f8bhnePw_AsB5JfkK0'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        RisikoPage,
        ResultPage,
        LostsPage,
        PremiPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
