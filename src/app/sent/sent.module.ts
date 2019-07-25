import { NgModule } from '@angular/core';
import { SentComponent } from './sent.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: SentComponent,
        pathMatch: 'full'
    }
]

@NgModule({
    declarations: [SentComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class SentModule {}