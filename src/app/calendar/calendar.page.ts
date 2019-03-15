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
import {injectStyles} from 'shadow-dom-inject-styles';

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
    , public events:Events
    , public platform:Platform
  ) {


    this.events.subscribe('event:addSuccess',()=>{
      console.log('refetchEventSources')
      $('#calendar').fullCalendar('removeEvents')
      
      $('#calendar').fullCalendar('addEventSource', {
        events:this.taskService.tasks
        , color:'#fc2231'
       })
      $('#calendar').fullCalendar('addEventSource', {
        events:this.eventsService.events
        , color:'#39b54a'
       })

    })
  }

  ngOnInit() {

    let self = this
    
    let heightAdjustment = 450

    if(this.platform.width() < 599)
      heightAdjustment = 240

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
      , height: this.platform.height() - heightAdjustment
      // defaultView: 'basicWeek'
    });

    
    setTimeout(()=>{
      $('#calendar').fullCalendar('addEventSource', {
        events:this.taskService.tasks
        , color:'#fc2231'
       })
    } , 1500)
    setTimeout(()=>{
      $('#calendar').fullCalendar('addEventSource', {
        events:this.eventsService.events
        , color:'#39b54a'
       })
    } , 1500)
    




    setTimeout(()=>{

      console.log('calendar events')

      let monthCB = (document.querySelector('#month-cb') as HTMLElement);
      console.log('-monthCB', monthCB)
      injectStyles(monthCB, 'ion-checkbox', `
      path {
        display: none !important;
      }
      `);

      let weekCB = (document.querySelector('#week-cb') as HTMLElement);
      injectStyles(weekCB, 'ion-checkbox', `
      path {
        display: none !important;
      }
      `);

      let dayCB = (document.querySelector('#day-cb') as HTMLElement);
      injectStyles(dayCB, 'ion-checkbox', `
      path {
        display: none !important;
      }
      `);

    } , 2000)

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
    if(this.selectedView.month){
      this.selectedView.month = false;
      return;
    }

    $('#calendar').fullCalendar('changeView', 'month');
    this.selectedView.day = false
    this.selectedView.week = false
  }
  weekView(){
    if(this.selectedView.week){
      this.selectedView.week = false;
      return;
    }
    $('#calendar').fullCalendar('changeView', 'agendaWeek');
    this.selectedView.day = false
    this.selectedView.month = false
  }
  dayView(){
    if(this.selectedView.day){
      this.selectedView.day = false;
      return;
    }
    $('#calendar').fullCalendar('changeView', 'agendaDay');
    this.selectedView.week = false
    this.selectedView.month = false
  }
}
