import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  
	constructor(
    public events: Events
    , public searchService: SearchService
  ) {

	}

  ngOnInit() {
  }
  btnMenuClickEvent() {
  	this.events.publish("btnclick:menu", true);
  }


  timeout
  onChangeSearch(evt){
    console.log(1,evt);
    if(this.timeout)
      clearTimeout(this.timeout)

    setTimeout(()=>{
        this.searchService.searchInput = evt.detail.value
    },500)
  }

}
