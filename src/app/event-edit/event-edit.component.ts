import { Component, OnInit } from '@angular/core';
import { Event } from '../events/event'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css', '../app.component.css']
})
export class EventEditComponent implements OnInit {

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

  save(): void {
    if (this.event) {
      this.eventService.updateEvent(this.event)
        .subscribe(() => this.goBack());
    }
  }

}
