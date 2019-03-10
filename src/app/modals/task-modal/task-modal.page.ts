import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../models/app-objects'
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';
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
	@Input() isCreateNew: boolean;
  constructor(
    private taskService: TaskService
    , private modalController: ModalController
    , private authService: AuthService

  ) { 
  }

  ngOnInit() {
    this.getProgress()
  }

  onClickSaveBtn(){
    this.taskService.createNewTask(this.task,this.authService.user).then((res)=>{
      this.modalController.dismiss();
    }).catch((err)=>{
      console.log("err", err)
    })
  }

  onClickAddActivity(evt){
    if(this.newActivityDescription.trim().length <= 0)
      return

  	this.taskService.addActivityToTask(this.task, this.newActivityDescription,this.authService.user).then((res)=>{
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
    this.getProgress()
  	this.taskService.updateTask(this.task,this.authService.user)
  }

  inputWait;
  onInputTaskName(){
  	if(this.inputWait){
  		clearTimeout(this.inputWait)
  	}

  	this.inputWait = setTimeout(()=>{
  		this.taskService.updateTask(this.task,this.authService.user)
  	}, 500)

  }

  onClickDelete(evt){
  	this.taskService.deleteTask(this.task).then((res)=>{
  		this.modalController.dismiss()
  	});
  }
  onInputActivityDescription(){
  	if(this.inputWait){
  		clearTimeout(this.inputWait)
  	}

  	this.inputWait = setTimeout(()=>{
  		this.taskService.updateTask(this.task,this.authService.user)
  	}, 500)

  }

  deleteActivity(evt, act ){
   	this.task.activities = this.task.activities.filter(e=>{
  		if(e.description != act.description)
  			return e
  	})

		this.taskService.updateTask(this.task,this.authService.user)
  }

  getProgress(){
    this.task.progress = this.task.activities.filter(e=>{return e.status}).length / this.task.activities.length 
  }

  updateTask(){
    this.taskService.updateTask(this.task,this.authService.user)
  }


}
