import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../../models/app-objects'
import { EventsService } from '../../services/events.service';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery'
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
	@Input() date

	description
	name

  constructor(
  	public eventService:EventsService
		,public events:Events
		,public modalController:ModalController
  ) { 
  }

  ngOnInit() {
  }

  onClickAddEvent(){
  	this.eventService.addEvent(this.name, this.description, this.date.format()).then(()=>{
  		this.events.publish('event:addSuccess')
  		this.modalController.dismiss()
  	});
  }
}
