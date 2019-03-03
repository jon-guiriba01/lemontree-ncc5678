import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import Cookies from 'js-cookie'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchText

	constructor(
		public menu: MenuController
		, public events: Events
    , public router: Router
		, public searchService: SearchService
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
    Cookies.set('user', null)
  	this.router.navigateByUrl('/login');
  }

  navTo(page){
  	this.router.navigateByUrl(page);
  }
}
