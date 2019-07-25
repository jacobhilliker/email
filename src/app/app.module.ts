import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmailService } from './services/email.service';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { DraftsComponent } from './drafts/drafts.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
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
