import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ModalController } from '@ionic/angular';
import { TaskModalPage } from '../modals/task-modal/task-modal.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { DragulaService } from 'ng2-dragula';
import { ToastController } from '@ionic/angular';
import { SearchService } from '../services/search.service';
import { AuthService } from '../services/auth.service';
import * as objects from '../../models/app-objects'
import * as $ from 'jquery'
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

  filters = [
    {name:'SHOW ALL', value:'showall'}
    ,{name:'To-do', value:'todo'}
    ,{name:'Doing', value:'doing'}
    ,{name:'Done', value:'done'}
  ]

  departments = [
    {name:'SHOW ALL', value:'showall'}
    ,{name:'Operations', value:'operations'}
    ,{name:'Marketing', value:'marketing'}
    ,{name:'Camps', value:'camps'}
    ,{name:'Admin', value:'admin'}
    ,{name:'Registration', value:'registration'}
  ]


  orders = [
    {name:'Date', value:'date_asc', icon:'arrow-round-up'}
    ,{name:'Date', value:'date_desc', icon:'arrow-round-down' }
    ,{name:'A-Z', value:'alphabet_asc', icon:'arrow-round-down'}
    ,{name:'A-Z', value:'alphabet_desc', icon:'arrow-round-up'}
  ]


  isDepartmentOpen
  isOrderOpen

  constructor(
    public taskService: TaskService
    , public modalController: ModalController
    , public afs: AngularFirestore
    , public storage: Storage
    , public dragulaService: DragulaService
    , public toastController: ToastController
    , public searchService: SearchService
    , public authService: AuthService
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
       this.taskService.updateTask(prevDrag, this.authService.user)
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
     if($('#filter-row').hasClass('closed-list')){
       $('#filter-row').removeClass('closed-list')
     }
     else{
       this.statusFilter = statusFilter
       this.filters.sort(function(x,y){ return x.value == statusFilter ? -1 : y.value == statusFilter ? 1 : 0; });
       $('#filter-row').addClass('closed-list')
     }
     // this.taskService.filterTasks(this.filter)
   }

   selectDepartment(selectedDepartment){

     if($('#department-row').hasClass('closed-list')){
       $('#department-row').removeClass('closed-list')
     }
     else{
       this.selectedDepartment = selectedDepartment
       this.departments.sort(function(x,y){ return x.value == selectedDepartment ? -1 : y.value == selectedDepartment ? 1 : 0; });
       $('#department-row').addClass('closed-list')
     }

   }
   selectOrder(selectedOrder){
     if($('#order-row').hasClass('closed-list')){
       $('#order-row').removeClass('closed-list')
     }
     else{
       this.selectedOrder = selectedOrder
       this.taskService.orderTasks(this.selectedOrder)
       this.orders.sort(function(x,y){ return x.value == selectedOrder ? -1 : y.value == selectedOrder ? 1 : 0; });
       $('#order-row').addClass('closed-list')
     }
   }

}
