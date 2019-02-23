import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ModalController } from '@ionic/angular';
import { TaskModalPage } from '../modals/task-modal/task-modal.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { DragulaService } from 'ng2-dragula';
import { ToastController } from '@ionic/angular';
import { SearchService } from '../services/search.service';
import * as objects from '../../models/app-objects'

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  
  addTaskName
  showAddTaskView = false

  prevDragged
  statusFilter = 'showall'
  selectedDepartment = 'showall'
  selectedOrder = 'date_asc'

  constructor(
    public taskService: TaskService
    , public modalController: ModalController
    , public afs: AngularFirestore
    , public storage: Storage
    , public dragulaService: DragulaService
    , public toastController: ToastController
    , public searchService: SearchService
   ) { 
 
    this.dragulaService.dropModel('drag-tasks')
      .subscribe(({ item }) => {
        this.prevDragged = item
    });

    let drake = this.dragulaService.createGroup('drag-tasks', {
      revertOnSpill: true
    }).drake

    this.storage.get('department').then((res)=>{
        // this.selectedDepartment = res || 'marketing'
    })
  }

  onChangeDrag(evt, status){
   console.log('-onChangeDrag', status)
    let tasksLength 
    if(this.prevDragged.status == status)
      return;
    setTimeout((res)=>{
       let prevDrag = this.prevDragged
       prevDrag.status = status
       this.taskService.updateTask(prevDrag)
    },1)
  }


  ngOnInit() {
  }

  switchTab(tab){
    this.storage.set('department', tab)
    // this.selectedDepartment = tab;
	}


  // onClickAddTask(evt){
  //   this.showAddTaskView = !this.showAddTaskView
  //   this.createNewTask(this.addTaskName, this.department)
  // }

  async onClickAddTask(evt){
    console.log('[onClickTask]')
      const modal = await this.modalController.create({
        component: TaskModalPage,
        componentProps: {
         task: new objects.Task('New Task Title', this.selectedDepartment)
         , isCreateNew: true
         }
      });
      return await modal.present();
   }
  async onClickTask(evt, task){
    console.log('[onClickTask]', task)
      const modal = await this.modalController.create({
        component: TaskModalPage,
        componentProps: { task: task }
      });

      await modal.present();

   }
   addTask(){
     this.showAddTaskView = !this.showAddTaskView
   }

   selectStatusFilter(statusFilter){
     this.statusFilter = statusFilter

     // this.taskService.filterTasks(this.filter)
   }

   selectDepartment(selectedDepartment){
     this.selectedDepartment = selectedDepartment
   }
   selectOrder(selectedOrder){
     this.selectedOrder = selectedOrder

     this.taskService.orderTasks(this.selectedOrder)
   }

}
