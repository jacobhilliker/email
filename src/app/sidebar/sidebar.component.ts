import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  accountVis: String = 'hidden';

  constructor() { }

  // Attached to profile picture
  toggleAccountVis(): void {
    if (this.accountVis == 'hidden') {
      this.accountVis = 'visible';
    } else {
      this.accountVis = 'hidden';
    }
  }

}
