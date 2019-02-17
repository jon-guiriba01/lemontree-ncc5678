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

}
