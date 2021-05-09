import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { TaskFormModule } from 'src/app/shared/components/task-form/task-form.module';
import { TaskGuard } from 'src/app/shared/guards/task.guard';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    TaskFormModule
  ],
  providers: [TaskGuard]
})
export class EditModule { }
