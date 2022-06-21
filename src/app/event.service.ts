import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './events/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl = 'http://localhost:3000/events/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {}

  

  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.eventUrl)
  }

  getEvent(id: string): Observable<Event>{
    return this.http.get<Event>(this.eventUrl+id);
  }

  updateEvent(event: Event): Observable<any> {
    return this.http.put(this.eventUrl+event.id, event, this.httpOptions);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete<Event>(this.eventUrl+id, this.httpOptions);
  }

  createEvent(event: Event): Observable<any> {
    return this.http.post(this.eventUrl, event, this.httpOptions);
  }
}
