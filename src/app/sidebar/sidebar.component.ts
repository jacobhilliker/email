import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  accountVis: String = 'hidden';

  constructor(private auth: AuthService) { }

  // Attached to profile picture
  toggleAccountVis(): void {
    if (this.accountVis == 'hidden') {
      this.accountVis = 'visible';
    } else {
      this.accountVis = 'hidden';
    }
  }

  logout(): void {
    this.auth.logout();
  }

}
