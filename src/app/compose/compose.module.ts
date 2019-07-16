import { NgModule } from '@angular/core';
import { ComposeComponent } from './compose.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: ComposeComponent,
        data: {
            title: 'jmail | New Message'
        }
    }
];

@NgModule({
    declarations: [ComposeComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})

export class ComposeModule {}