import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ModalController } from '@ionic/angular';
import { TaskModalPage } from '../modals/task-modal/task-modal.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { DragulaService } from 'ng2-dragula';
import { ToastController } from '@ionic/angular';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  
  q1 = [
    { value: 'Buy Milk', color: 'primary' },
    { value: 'Write new Post', color: 'primary' }
  ];
  q2 = [
    { value: 'Schedule newsletter', color: 'secondary' },
    { value: 'Find new Ionic Academy topics', color: 'secondary' }
  ];
  q3 = [
    { value: 'Improve page performance', color: 'tertiary' },
    { value: 'Clean the house', color: 'tertiary' }
  ];
  q4 = [
    { value: 'Unimportant things', color: 'warning' },
    { value: 'Watch Netflix', color: 'warning' }
  ];
  
  todo = { value: '', color: '' };
  selectedQuadrant = 'q1';

  addTaskName
  department = 'marketing'
  showAddTaskView = false

  prevDragged

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
        this.department = res || 'marketing'
    })
  }

  onChangeDrag(evt, status){
   console.log('-onChangeDrag', status)
    let tasksLength 
    if(this.prevDragged.status == status)
      return;
    setTimeout((res)=>{
       console.log('-test', evt)
       console.log('-test', status)

       console.log('-testxxx', this.prevDragged)
       let prevDrag = this.prevDragged
       prevDrag.status = status
       this.taskService.updateTask(prevDrag)
    },1)
  }


  ngOnInit() {
  }

  switchTab(tab){
    this.storage.set('department', tab)
    this.department = tab;
	}

  createNewTask(taskName, department){
    this.taskService.createNewTask(taskName, department)
  }

  onClickAddTask(evt){
    this.showAddTaskView = !this.showAddTaskView
    this.createNewTask(this.addTaskName, this.department)
  }

  async onClickTask(evt, task){
    console.log('[onClickTask]', task)
      const modal = await this.modalController.create({
        component: TaskModalPage,
        componentProps: { task: task }
      });
      return await modal.present();
   }

   addTask(){
     this.showAddTaskView = !this.showAddTaskView
   }
}
