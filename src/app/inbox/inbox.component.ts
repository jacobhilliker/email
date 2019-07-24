import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  
  messages = [];

  constructor(private emailService: EmailService) {}

  /*messages = [
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
  ];*/

  ngOnInit() {
    this.emailService.getEmails().then(data => {
      this.messages = data;
    });
  }

}
