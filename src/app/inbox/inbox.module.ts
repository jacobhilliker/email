import { NgModule } from '@angular/core';
import { InboxComponent } from './inbox.component';
import { MessageComponent } from './message/message.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: InboxComponent,
        pathMatch: 'full'
    }
]

@NgModule({
    declarations: [InboxComponent, MessageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class InboxModule {}