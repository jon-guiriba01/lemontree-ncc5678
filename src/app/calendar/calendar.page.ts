import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

	calendar = {
		mode: 'month',
		currentDate: new Date()
	}

  eventSource = null
  startTime = null;
  endTime = null;
  constructor(
  ) { }

  ngOnInit() {
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
