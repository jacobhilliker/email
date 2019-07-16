import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InboxComponent } from './inbox/inbox.component';
import { NavComponent } from './inbox/nav/nav.component';
import { MessageComponent } from './inbox/message/message.component';
import { HomeComponent } from './home/home.component';
import { ComposeComponent } from './compose/compose.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      title: 'jmail | Home'
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'compose',
    loadChildren: () => import('./compose/compose.module').then(m => m.ComposeModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InboxComponent,
    NavComponent,
    MessageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
