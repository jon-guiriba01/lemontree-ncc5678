import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  switchTab(tab){
  	switch (tab) {
  		case "marketing":
  			break;
  		
  		default:
  			break;
  	}

  	console.log("switched to", tab)
  }
}
