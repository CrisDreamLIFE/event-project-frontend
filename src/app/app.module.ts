import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventCreateComponent } from './event-create/event-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailComponent,
    EventEditComponent,
    EventCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
