import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsComponent } from './sessionsContainer/sessions.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SessionsComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    SharedModule
  ]
})
export class SessionsModule { }
