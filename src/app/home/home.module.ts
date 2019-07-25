import { NgModule } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeComponent } from './home.component';
import { NavComponent } from '../inbox/nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        children: [
            {
                path: 'sent',
                loadChildren: () => import('../inbox/inbox.module').then(m => m.InboxModule),
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../sent/sent.module').then(m => m.SentModule)
            }
        ]
    }    
];

@NgModule({
    declarations: [SidebarComponent,
    HomeComponent,
    NavComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)]
})

export class HomeModule {}