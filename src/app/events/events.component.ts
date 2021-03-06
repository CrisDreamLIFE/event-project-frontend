import { Component, OnInit } from '@angular/core';
import { Event } from '../events/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css', '../app.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];
  
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  deleteEvent(event: Event): void {
    this.events = this.events.filter( e => e !== event)
    this.eventService.deleteEvent(event.id).subscribe();
  }
}
