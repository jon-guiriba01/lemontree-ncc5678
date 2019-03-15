import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../../models/app-objects'
import { EventsService } from '../../services/events.service';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery'
import { Events } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import * as moment from 'moment'


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
		,public navParams: NavParams
  ) { 
  }

  ngOnInit() {
    // this.date = moment().format('YYYY-MM-DD')
    console.log('dxxate', this.date)
    this.date = moment(this.date).format('YYYY-MM-DD')
    // if(this.date)
    //   this.date = this.date.format()
    // console.log('date', this.date)
  }

  onClickAddEvent(evt){
  	this.eventService.addEvent(this.name, this.description, this.date).then(()=>{
  		this.events.publish('event:addSuccess')
  		this.modalController.dismiss()
  	});
  }

  dismiss(evt){
    this.modalController.dismiss()
  }
}
