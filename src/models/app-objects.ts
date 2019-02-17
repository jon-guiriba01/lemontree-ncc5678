class Task {
	id:string
	name:string
	deadline:Date
	activities:Array<Activity>=[]
	status:string='todo'
	group:string

	constructor(name:string, group:string){
		this.name = name
		this.group = group
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