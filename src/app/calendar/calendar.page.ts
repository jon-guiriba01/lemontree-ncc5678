import { Component, OnInit,  } from '@angular/core';
// import { Options } from 'fullcalendar';
import * as $ from 'jquery'
import 'fullcalendar';
import { EventsService } from '../services/events.service'
import { TaskService } from '../services/task.service'
import { ModalController } from '@ionic/angular';
import { AddEventPage } from '../modals/add-event/add-event.page';
import { Events } from '@ionic/angular';
import * as moment from 'moment'

import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  
  calendarOptions;
  calendarEvents = []

	calendar = {
		mode: 'month',
		currentDate: new Date()
	}

  eventSource = null
  startTime = null;
  endTime = null;

  selectedView = {
    day: false,
    week: false,
    month: true
  }
  constructor(
    private eventsService: EventsService
    , private taskService: TaskService
    , private modalController: ModalController
    ,public events:Events
    ,public platform:Platform
  ) {
    this.events.subscribe('event:addSuccess',()=>{
        setTimeout(()=>{
          $('#calendar').fullCalendar('addEventSource', {
            events:this.eventsService.events
            , color:'#39b54a'
           })
      } , 1000)
    })
  }

  ngOnInit() {
    let self = this
    
    $('#calendar').fullCalendar({
      dayClick: async function(date, jsEvent, view) {
        let dom =  $(this)
        console.log('-test', date.format('ll'))
          const modal = await self.modalController.create({
            component: AddEventPage,
            componentProps: { date: date.format('ll') }
          });
          return await modal.present();
      },
      header: {
        center: 'prev, title, next'
        ,left: ''
        ,right: ''
      }
      ,handleWindowResize: true
      , height: this.platform.height() - 450
      // defaultView: 'basicWeek'
    });


    setTimeout(()=>{
      $('#calendar').fullCalendar('addEventSource', {
        events:this.eventsService.events
        , color:'#39b54a'
       })
    } , 1500)
    setTimeout(()=>{
      $('#calendar').fullCalendar('addEventSource', {
        events:this.taskService.tasks
        , color:'#fc2231'
       })
    } , 1500)
  }

  
  onCurrentDateChanged(event){

  }
  
  onEventSelected(event){

  }
  
  onViewTitleChanged(event){

  }

  onTimeSelected(event){

  }

  reloadSource(startTime, endTime){

  }

  async onClickAddEvent(evt){
    const modal = await this.modalController.create({
      component: AddEventPage,
      componentProps: { date: moment().format('ll') }
    });
    return await modal.present();
  }

  monthView(){
    console.log('-test 1')
    $('#calendar').fullCalendar('changeView', 'month');
    this.selectedView.day = false
    this.selectedView.week = false
  }
  weekView(){
    console.log('-test 2')
    $('#calendar').fullCalendar('changeView', 'agendaWeek');
    this.selectedView.day = false
    this.selectedView.month = false
  }
  dayView(){
    console.log('-test 3')
    $('#calendar').fullCalendar('changeView', 'agendaDay');
    this.selectedView.week = false
    this.selectedView.month = false
  }
}
