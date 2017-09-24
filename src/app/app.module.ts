import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { Page1 } from '../pages/page1/page1';
// import { Page2 } from '../pages/page2/page2';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { ProjectAddPage } from '../pages/project-add/project-add';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProjectsProvider } from '../providers/projects/projects';
import { ProjectDuplicateValidator } from '../app/validators/projectduplicate';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    // Page1,
    // Page2,
    ProjectAddPage,
    LoginPage,
    SignupPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, { links: [] })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // Page1,
    // Page2,
    ProjectAddPage,
    LoginPage,
    SignupPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProjectsProvider,ProjectDuplicateValidator
  ]
})
export class AppModule { }
