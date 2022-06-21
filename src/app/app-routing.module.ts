import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventCreateComponent } from './event-create/event-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'events', component: EventsComponent },
  { path: 'event/:id/show', component: EventDetailComponent },
  { path: 'event/:id/edit', component: EventEditComponent},
  { path: 'event/create', component: EventCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
