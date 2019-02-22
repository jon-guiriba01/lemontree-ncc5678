import * as moment from 'moment';

class Task {
	id:string
	name:string
	deadline:string=moment().format('DD-MM-YYYY')
	activities:Array<Activity>=[]
	status:string='todo'
	group:string
	author:string='anonymus'
	progress:number=0.0

	constructor(name:string, group:string, deadline:string=moment().format('YYYY-MM-DD')){
		this.name = name
		this.group = group
		this.deadline = deadline
	}

}

class Activity{
	id:number
	name:string
	description:string
	status:boolean = false

	constructor(description:string){
		// this.id = id
		this.description = description
	}
}


class Event{
	name:string
	description:string
	date:any

	constructor(name:string, description:string, date: any){
		this.name = name
		this.description = description
		this.date = date
	}
}



export {Activity, Task, Event}