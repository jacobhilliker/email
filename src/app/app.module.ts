import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InboxComponent } from './inbox/inbox.component';
import { NavComponent } from './inbox/nav/nav.component';
import { MessageComponent } from './inbox/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InboxComponent,
    NavComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
