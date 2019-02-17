import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilService } from './services/util.service'
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform
    , private splashScreen: SplashScreen
    , private statusBar: StatusBar
    , public util: UtilService
    , public storage: Storage
  ) {


    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.storage.get('tasks').then( (res)=>{

        if(!res){
          let tasks = []
          this.storage.set('tasks', tasks)
        }
      })

    });
  }
}
