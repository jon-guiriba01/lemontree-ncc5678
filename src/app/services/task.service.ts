import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as objects from '../../models/app-objects'
import { UtilService } from '../services/util.service'
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { map  } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Array<objects.Task> = [];
  // tasks = {
  //   todo:[]
  //   , doing:[]
  //   , done:[]
  // }
  // todo=[]
  // doing=[]
  // done=[]

  tasksCollection

  constructor(
    public sotrage: Storage
    , public util: UtilService
    , private afs: AngularFirestore
  ) { 

    this.tasksCollection = this.afs.collection('tasks')
    this.tasksCollection.snapshotChanges().subscribe(
      (dataSet)=>{
        let tasks = []

        // let tasks = {
        //   todo:[]
        //   , doing:[]
        //   , done:[]
        // }
        for(let data of dataSet){
          let task = {...data.payload.doc.data()}
          task.id = data.payload.doc.id
          // task.progress = task.activities.filter(e=>{return e.status}).length / task.activities.length;
          // if(task.status == 'todo')
          //   tasks.todo.push(task)

          // else if(task.status == 'doing')
          //   tasks.doing.push(task)

          // else if(task.status == 'done')
          //   tasks.done.push(task)
            tasks.push(task)
        }
        
        this.tasks = tasks
        // this.todo = tasks.todo
        // this.doing = tasks.doing
        // this.done = tasks.done
        console.log("this.tasks", tasks)
      }
    )
     
  }

  getTasks(dept){

    console.log('[getTasks]', this.tasks)
    return this.tasks
  }

  createNewTask(task: objects.Task){
     if(!task.name)
       return
    else if(task.name.length <= 0)
      return

    console.log("[Added Task]", task)

    return new Promise((resolve,reject)=>{
      this.tasksCollection.add({...task}).then((res)=>{
        resolve()
      }).catch((err)=>{
        reject()
        console.log("err", err)
      })
    })
     
  }


  addActivityToTask(task:objects.Task, description){
    return new Promise((resolve,reject)=>{
      console.log("[addActivityToTask]", task)
      let newAct = new objects.Activity(description)
      console.log("[addActivityToTask] activity|", newAct)

      let isDup = false
      for(let activity of task.activities){
        if(activity.description == newAct.description){
          isDup = true
        }
      }

      if(!isDup){
        task.activities.push({...newAct})
        if(task.id){
          this.tasksCollection.doc(task.id).update(task).then((res)=>{
          resolve()
          }).catch((err)=>{
             console.log('*addActivityToTask',err)
             reject()
          })
        }
        else{
          reject();
        }

      }
    })
     
  }

  deleteTask(task){
    console.log("[deleteTask]", task)
    return this.tasksCollection.doc(task.id).delete();
  }

  updateTask(task){
    console.log("[updateTask]", task)

    if(!task.id) return;

    return this.tasksCollection.doc(task.id).update(task)
  }


  orderTasks(order){
    switch (order) {
      case "date_asc":
        this.tasks.sort((a,b) => {
          if (a.deadline < b.deadline)
              return -1;
            if (a.deadline > b.deadline)
              return 1;
            return 0;
        }); 
        break;
      case "date_desc":
        this.tasks.sort((a,b) => {
          if (a.deadline > b.deadline)
              return -1;
            if (a.deadline < b.deadline)
              return 1;
            return 0;
        }); 
        break;
      case "alphabet_asc":
        this.tasks.sort((a,b) => {
          if (a.name < b.name)
              return -1;
            if (a.name > b.name)
              return 1;
            return 0;
        }); 
      
        break;
      case "alphabet_adesc":
        this.tasks.sort((a,b) => {
          if (a.name < b.name)
              return -1;
            if (a.name > b.name)
              return 1;
            return 0;
        }); 

        break;
    }
  }

  // getTaskList(){
  //   return []
  // }
}
