import { Component, OnInit } from '@angular/core';
import { EventsService } from './Services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  gift:string="";

  constructor(public eventSer:EventsService) {}

  ngOnInit(): void {
    this.eventSer.gift$.subscribe(g=> this.gift=g);
  }
  
}
