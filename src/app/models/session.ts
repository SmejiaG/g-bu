export interface Session {
  id?: string;
  sessionName?: string;
  project?: string;
  startTime?: string;
  endTime?: string;
  playerId?: string;
  playerFriendlyName?: string;
  videoStartTime?: string;
  videoLink?: string;
}

export const MOCK_SESSIONS: Session[] = [
  {
    id: '3f0d196b-a70a-46f6-93d9-c73ef5ef79f9',
    sessionName: 'SessionName_1',
    project: 'Project_1',
    startTime: '2019-07-05T12:40:10.630571',
    endTime: '2019-07-05T12:40:10.630571',
    playerId: 'PlayerId_1',
    playerFriendlyName: 'PlayerFriendlyName_1',
    videoStartTime: '2019-07-05T12:40:10.630571',
    videoLink: 'VideoLink_1'
  },
  {
    id: '3e90ef8d-ac06-4d39-aa53-f5fba007bfae',
    sessionName: 'SessionName_2',
    project: 'Project_2',
    startTime: '2019-07-05T12:40:10.630571',
    endTime: '2019-07-05T12:40:10.630571',
    playerId: 'PlayerId_2',
    playerFriendlyName: 'PlayerFriendlyName_2',
    videoStartTime: '2019-07-05T12:40:10.630571',
    videoLink: 'VideoLink_2'
  },
  {
    id: '4fef0e3c-7150-4533-a698-6b299673d67a',
    sessionName: 'SessionName_3',
    project: 'Project_3',
    startTime: '2019-07-05T12:40:10.630571',
    endTime: '2019-07-05T12:40:10.630571',
    playerId: 'PlayerId_3',
    playerFriendlyName: 'PlayerFriendlyName_3',
    videoStartTime: '2019-07-05T12:40:10.630571',
    videoLink: 'VideoLink_3'
  },
  {
    id: '8735fd7a-0195-4ebd-8ca1-c354456d23f4',
    sessionName: 'SessionName_4',
    project: 'Project_4',
    startTime: '2019-07-05T12:40:10.630571',
    endTime: '2019-07-05T12:40:10.630571',
    playerId: 'PlayerId_4',
    playerFriendlyName: 'PlayerFriendlyName_4',
    videoStartTime: '2019-07-05T12:40:10.630571',
    videoLink: 'VideoLink_4'
  },
  {
    id: 'cd94d8ea-d46f-4637-9801-2b67fcd07e27',
    sessionName: 'SessionName_5',
    project: 'Project_5',
    startTime: '2019-07-05T12:40:10.630571',
    endTime: '2019-07-05T12:40:10.630571',
    playerId: 'PlayerId_5',
    playerFriendlyName: 'PlayerFriendlyName_5',
    videoStartTime: '2019-07-05T12:40:10.630571',
    videoLink: 'VideoLink_5'
  },
  {
    id: '5975d9e9-2271-4c60-82c6-21e9b4576f5f',
    sessionName: 'SessionName_6',
    project: 'Project_6',
    startTime: '2019-07-05T07:40:10.630571',
    endTime: '2019-07-05T07:40:10.630571',
    playerId: 'PlayerId_6',
    playerFriendlyName: 'PlayerFriendlyName_6',
    videoStartTime: '2019-07-05T07:40:10.630571',
    videoLink: 'VideoLink_6'
  },
  {
    id: 'bbb7f03a-8367-4b98-8d01-83b071780fe6',
    sessionName: 'SessionName_66',
    project: 'Project_66',
    startTime: '2019-07-05T10:55:13.065247',
    endTime: '2019-07-05T10:55:13.065249',
    playerId: 'PlayerId_66',
    playerFriendlyName: 'PlayerFriendlyName_66',
    videoStartTime: '2019-07-05T10:55:13.065251',
    videoLink: 'VideoLink_66'
  }
];
