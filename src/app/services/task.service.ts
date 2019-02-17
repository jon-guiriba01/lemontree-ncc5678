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

  // tasks = []
  tasks = {
    todo:[]
    , doing:[]
    , done:[]
  }
  todo=[]
  doing=[]
  done=[]

  tasksCollection
  constructor(
    public sotrage: Storage
    , public util: UtilService
    , private afs: AngularFirestore
  ) { 

    this.tasksCollection = this.afs.collection('tasks')
    this.tasksCollection.snapshotChanges().subscribe(
      (dataSet)=>{
        let tasks = {
          todo:[]
          , doing:[]
          , done:[]
        }
        for(let data of dataSet){
          let task = {...data.payload.doc.data()}
          task.id = data.payload.doc.id

          if(task.status == 'todo')
            tasks.todo.push(task)

          else if(task.status == 'doing')
            tasks.doing.push(task)

          else if(task.status == 'done')
            tasks.done.push(task)
        }
        
        // this.tasks = tasks
        this.todo = tasks.todo
        this.doing = tasks.doing
        this.done = tasks.done
        console.log("this.tasks", tasks)
      }
    )
     
  }

  getTasks(dept){

    console.log('[getTasks]', this.tasks)
    return this.tasks
  }

  createNewTask(taskName : string, department:string){
     if(!taskName)
       return
    else if(taskName.length <= 0)
      return
    let task = new objects.Task(taskName, department)

    console.log("[Added Task]", task)
    this.tasksCollection.add({...task})
     
  }


  addActivityToTask(task, description){
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
        this.tasksCollection.doc(task.id).update(task).then((res)=>{
          resolve()
        
        }).catch((err)=>{
          console.log(err)
          reject()

        })
      }
    })
     
  }

  deleteTask(task){
    console.log("[deleteTask]", task)
    return this.tasksCollection.doc(task.id).delete();
  }

  updateTask(task){
    console.log("[updateTask]", task)
    return this.tasksCollection.doc(task.id).update(task)
  }

  // getTaskList(){
  //   return []
  // }
}
