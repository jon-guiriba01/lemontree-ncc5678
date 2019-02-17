import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../models/app-objects'
import { TaskService } from '../../services/task.service';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery'

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.page.html',
  styleUrls: ['./task-modal.page.scss'],
})
export class TaskModalPage implements OnInit {

	newActivityDescription
	progress = 0
	@Input() task: Task;
  constructor(
    private taskService: TaskService
    , private modalController: ModalController

  ) { 
  }

  ngOnInit() {
  	setTimeout(()=>{this.getProgress()}, 100)
  }

  onClickAddActivity(evt){
  	this.taskService.addActivityToTask(this.task, this.newActivityDescription).then((res)=>{
      this.getProgress()
    });
  	this.newActivityDescription = null;
  }

  onClickActivityStatus(act, evt){

  	for(let activity of this.task.activities){
  		if(activity.description == act.description){
  			activity.status = act.status
  		}
  	}
  	this.taskService.updateTask(this.task)
  	this.getProgress()
  }

  inputWait;
  onInputTaskName(){
  	if(this.inputWait){
  		clearTimeout(this.inputWait)
  	}

  	this.inputWait = setTimeout(()=>{
  		this.taskService.updateTask(this.task)
  	}, 500)

  }

  onClickDelete(){
  	this.taskService.deleteTask(this.task).then((res)=>{
  		this.modalController.dismiss()
  	});
  }
  onInputActivityDescription(){
  	if(this.inputWait){
  		clearTimeout(this.inputWait)
  	}

  	this.inputWait = setTimeout(()=>{
  		this.taskService.updateTask(this.task)
  	}, 500)

  }

  deleteActivity(evt, act ){
  	console.log('delete' ,act)
  	console.log('delete' ,act)
  	this.task.activities = this.task.activities.filter(e=>{
  		if(e.description != act.description)
  			return e
  	})

  	console.log('deletexxxx' , this.task)
		this.taskService.updateTask(this.task)
  }

  getProgress(){
  	let done = 0.00
  	let max = this.task.activities.length

  	for(let activity of this.task.activities){
  		if(activity.status)
  			done += 1.0
  	}

  	this.progress = (done/max)
  	console.log("p ", this.progress)

  	$('.progressbar').attr('value', this.progress)
  	return this.progress 
  }
}
