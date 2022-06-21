import { Component, OnInit } from '@angular/core';
import { Event } from '../events/event';
import { EventService } from '../event.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css', '../app.component.css']
})
export class EventCreateComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private location: Location 
  ) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
  
  create(title: string, date: string): void {
    if (!title && !date) { return; }
    this.eventService.createEvent({title, date} as Event)
      .subscribe( () => {window.location.href = '/';}); 
  }

}
