import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { EmailService } from './services/email.service';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { NavComponent } from './inbox/nav/nav.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { MessageComponent } from './inbox/message/message.component';
import { DraftsComponent } from './drafts/drafts.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      title: 'jmail | Home'
    },
    canActivate: [AuthGuardService],
    children: [{ path: '', component: InboxComponent }]
  },
  {
    path: 'sent', // Not sure if there's a better solution
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [{ path: '', component: SentComponent, pathMatch: 'full' }]
  },
  {
    path: 'drafts',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [{ path: '', component: DraftsComponent, pathMatch: 'full'}]
  },
  {
    path: 'spam',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [{ path: '', component: SpamComponent, pathMatch: 'full'}]
  },
  {
    path: 'trash',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [{ path: '', component: TrashComponent}]
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
    HomeComponent,
    NavComponent,
    InboxComponent,
    SentComponent,
    MessageComponent,
    DraftsComponent,
    SpamComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    EmailService,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
