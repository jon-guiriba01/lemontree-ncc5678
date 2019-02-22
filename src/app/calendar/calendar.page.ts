import { Component, OnInit } from '@angular/core';
// import { Options } from 'fullcalendar';
import * as $ from 'jquery'
import 'fullcalendar';
import { EventsService } from '../services/events.service'
import { ModalController } from '@ionic/angular';
import { AddEventPage } from '../modals/add-event/add-event.page';
import { Events } from '@ionic/angular';


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
  constructor(
    private eventsService: EventsService
    , private modalController: ModalController
    ,public events:Events
  ) {
    this.events.subscribe('event:addSuccess',()=>{
      setTimeout(()=>{
        $('#calendar').fullCalendar('addEventSource', this.eventsService.events)
      } , 1000)
      
    })
  }

  ngOnInit() {

    setTimeout(()=>{
      console.log('[ngOnInit]', this.eventsService.events)
      $('#calendar').fullCalendar('addEventSource', this.eventsService.events)
    } , 1000)

    let self = this

    $('#calendar').fullCalendar({
      footer: {
        center: 'month,agendaWeek,agendaDay',
      }
      , events: self.eventsService.events
      ,dayClick: async function(date, jsEvent, view) {
        let dom =  $(this)

          const modal = await self.modalController.create({
            component: AddEventPage,
            componentProps: { date: date }
          });
          return await modal.present();

        // alert('Clicked on: ' + date.format());
          
          // eventsService.
        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        // alert('Current view: ' + view.name);


      },
      customButtons: {
        filter: {
          text: 'Filters',
          click: function() {
          }
        },
        otherBtn: {
          text: 'Others',
          click: function() {
          }
        },
        eventsBtn: {
          text: 'Events',
          click: function() {
          }
        },
        deadlinesBtn: {
          text: 'Deadlines',
          click: function() {
          }
        },
      },
      header: {
        center: 'filter, otherBtn, eventsBtn, deadlinesBtn ',
      },
      handleWindowResize: false
      // defaultView: 'basicWeek'
    });
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
}
