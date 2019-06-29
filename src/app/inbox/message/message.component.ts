import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {

  @Input() sender: String;
  @Input() timeReceived: String;
  @Input() title: String;
  @Input() content: String;

  background: string;

  // Determines visibility of "Unread" dot
  dotVis: string = 'visible';

  constructor() {}

  ngOnInit() {}

  highlight(): void {
    this.background = '#aaeeff';
  }

  markAsRead(): void {
    this.dotVis = 'hidden';
  }

}
