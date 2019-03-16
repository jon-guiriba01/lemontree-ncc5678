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
  @Input() isCreateNew

	description
	name
  events:any = []

  constructor(
  	public eventService:EventsService
		,public ionEvents:Events
    ,public modalController:ModalController
		,public navParams: NavParams
  ) { 
  }

  ngOnInit() {
    // this.date = moment().format('YYYY-MM-DD')
    console.log('add event modal date', this.date)
    this.date = moment(this.date).format('YYYY-MM-DD')

    if(!this.isCreateNew){
      this.eventService.getEvents(this.date).then((res)=>{
        console.log('-events', this.events)
        this.events = res
      });
    }
    // if(this.date)
    //   this.date = this.date.format()
    // console.log('date', this.date)
  }

  onClickAddEvent(evt){
  	this.eventService.addEvent(this.name, this.description, this.date).then(()=>{
  		this.ionEvents.publish('event:addSuccess')
  		this.modalController.dismiss()
  	});
  }

  dismiss(evt){
    this.modalController.dismiss()
  }

  inputWait;
  updateEvent(event){

    if(this.inputWait){
      clearTimeout(this.inputWait)
    }

    this.inputWait = setTimeout(()=>{
      this.eventService.updateEvent(event).then(()=>{
      });
    }, 500)
  }

  deleteEvent(event){
    this.eventService.deleteEvent(event).then(()=>{

      this.eventService.getEvents(this.date).then((res)=>{
        console.log('-events', this.events)
        this.events = res
      });
      
    })
  }
}
