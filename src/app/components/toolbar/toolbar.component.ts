import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  
	constructor(public events: Events) {

	}

  ngOnInit() {
  }
  btnMenuClickEvent() {
  	this.events.publish("btnclick:menu", true);
  }


}
