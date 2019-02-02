import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(
		private menu: MenuController
		, private events: Events
		, private router: Router
	) {

		this.initMenu()
	}

	initMenu(){

    this.menu.enable(true, 'main');
	  this.events.subscribe('btnclick:menu', async (isEnabled) => {
	  	console.log("clicked btn menu")
	  	
    		this.menu.toggle('main');

	  });
	}

  openSidebar() {
  }

  logout(){
  	console.log("loguot")
  	this.router.navigateByUrl('/login');
  }

  navTo(page){
  	this.router.navigateByUrl(page);
  }
}
