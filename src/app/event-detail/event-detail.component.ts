import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../events/event'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css', '../app.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location 
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);
  }

  goBack(): void {
    this.location.back();
  }
}
