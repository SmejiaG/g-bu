import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Session, MOCK_SESSIONS } from './../../models/session';

@Component({
  selector: 'g-bu-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsComponent implements OnInit {
  displayedColumns: string[] = [
    'playerFriendlyName',
    'playerId',
    'startTime',
    'endTime'
  ];
  dataSource: Session[] = MOCK_SESSIONS;
  constructor() {}

  ngOnInit() {}
}
