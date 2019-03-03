import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service'
import * as moment from 'moment'
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TaskModalPage } from '../modals/task-modal/task-modal.page';
import * as objects from '../../models/app-objects'
import * as $ from 'jquery'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

	upcomingEvents = []

  constructor(
  	public eventService : EventsService
  	, public router : Router
    , private modalController: ModalController

 	) {
  	this.eventService.getUpcomingEvents().then((res)=>{
  		this.upcomingEvents = res
  		console.log('dashboard events', res)
  	}).catch((err)=>{
  		console.log("err", err)
  	})
 	}

  ngOnInit() {
  }

	navTo(page){
		this.router.navigateByUrl(page);
	}

	async newTask(){

		const modal = await this.modalController.create({
		  component: TaskModalPage,
		  componentProps: { 
       task: new objects.Task('New Task Title', null)
       , isCreateNew: true
      }
		});
		return await modal.present();
	}


	upload(){

	  $('.hidden-input').click()

	  $('.hidden-input').change((e:any)=>{
	      e.stopImmediatePropagation();
	      var file = e.target.files[0];
	      console.log('The file "' + file.name +  '" has been selected.');
	      this.storageService.uploadFile(file, null)
	  });

	}


}
