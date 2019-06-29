import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  
  messages = [
    {
      sender: 'Jacob H',
      timeReceived: 'now',
      title: 'Hey everybody!',
      content: 'Here\'s my project!'
    }, 
    {
      sender: 'Aaron H',
      timeReceived: '2 hours ago',
      title: 'I am definitely your real twin',
      content: 'Totally not a story you made up'
    },
    {
      sender: 'Jarrod',
      timeReceived: '4 hours ago',
      title: 'Ouch',
      content: 'my ankles'
    }
  ];

  constructor() {}

  ngOnInit() {}

}
