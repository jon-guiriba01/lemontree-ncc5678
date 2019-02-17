import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    public storage: Storage
  ) { }

  getTaskId(){
  	return new Promise<number>((resolve,reject)=>{
		  this.storage.get('uq-task-id').then((res) =>{
		  	res +=1
		  	this.storage.set('uq-task-id', res)
  			resolve(res)

		  });
  	})
  }
}
