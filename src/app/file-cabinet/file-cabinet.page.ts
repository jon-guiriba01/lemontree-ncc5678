import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-cabinet',
  templateUrl: './file-cabinet.page.html',
  styleUrls: ['./file-cabinet.page.scss'],
})
export class FileCabinetPage implements OnInit {

  constructor() { }

  files = [
  	{
  		name: "The Quick.txt"
  	},
  	{
  		name: "Brown.png"
  	},
  	{
  		name: "Fox jumps.jpg"
  	},
  	{
  		name: "Over.mp4"
  	},
  	{
  		name: "The Lazy Dog.mob"
  	},
  ]
  
  ngOnInit() {
  }

}
