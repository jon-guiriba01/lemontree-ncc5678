import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as objects from '../../models/app-objects'
import { UtilService } from '../services/util.service'
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { map  } from 'rxjs/operators';
import { from } from 'rxjs';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

	eventsCollection
	events = []
  constructor(
    public sotrage: Storage
    , public util: UtilService
    , private afs: AngularFirestore
  ) { 

    this.eventsCollection = this.afs.collection('events')
    this.eventsCollection.snapshotChanges().subscribe(
      (dataSet)=>{
        let events = []
        for(let data of dataSet){
          let event = {...data.payload.doc.data()}
          event.id = data.payload.doc.id
          event.start = event.date
          event.title = event.name
          events.push(event)
        }

        this.events = events
        console.log("this.events", this.events)
      }
    )
     
  }

  addEvent(name, description, date){
  	return new Promise((resolve,reject)=>{

	    if(!name || !description || !date)
	       return

	    else if(name.length <= 0 || description.length <= 0 || date.length <= 0)
	      return
	    let event = new objects.Event(name, description, date)

	    console.log("[Added Event]", event)
	    this.eventsCollection.add({...event}).then((res)=>{
  			resolve()
	    	
	    });

  	})
	     
  }

  getUpcomingEvents(){
    let prevMonth = moment().subtract(30, 'days').format('YYYY-MM-DD')
    let upcomingEventsCollection = this.afs.collection('events', ref=>ref.where('date', '>', prevMonth))
    
    return new Promise((resolve,reject)=>{

      upcomingEventsCollection.snapshotChanges().subscribe(
        (dataSet)=>{
          let events = []
          for(let data of dataSet){
            let event:any = {...data.payload.doc.data()}
            event.id = data.payload.doc.id
            event.start = event.date
            event.formattedDate = moment(event.date).format('ll')
            event.title = event.name
            events.push(event)
          }

          resolve(events)
        }
      )
    })

  }

  getEvents(date){
    let eventsQuery = this.afs.collection('events', ref=>ref.where('date', '==', date))
    
    return new Promise((resolve,reject)=>{

      eventsQuery.snapshotChanges().subscribe(
        (dataSet)=>{
          let events = []
          for(let data of dataSet){
            let event:any = {...data.payload.doc.data()}
            event.id = data.payload.doc.id
            event.start = event.date
            event.formattedDate = moment(event.date).format('ll')
            event.title = event.name
            events.push(event)
          }

          resolve(events)
        }
      )
    })
  }

  updateEvent(event){
    console.log("[updateEvent]", event)

    if(!event.id) return;

    return this.eventsCollection.doc(event.id).update(event)
  }


  deleteEvent(task){
    console.log("[deleteEvent]", task)
    return this.eventsCollection.doc(task.id).delete();
  }

}
